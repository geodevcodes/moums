import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { avatarPlaceholderUrl } from "@/lib/lib";
import { useFilesUploadRequest } from "@/services/file-upload/files-upload.request";
import {
  useUpdateUserProfile,
  useUserProfile,
} from "@/services/settings/settingsService";
import { UserAvatar } from "@/types/settingsType";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import Toast from "react-native-toast-message";

const ProfileAndBusiness = () => {
  const [userAvatar, setUserAvatar] = useState<UserAvatar | null>(null);
  const { data: profileData } = useUserProfile();
  const { mutate: updateUserProfile, isPending } = useUpdateUserProfile();
  const { mutateAsync: filesUploadRequest } = useFilesUploadRequest();

  const userProfile =
    (profileData && (profileData.data ?? profileData)) || null;

  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      firstName: userProfile?.firstName || "",
      lastName: userProfile?.lastName || "",
      email: userProfile?.email || "",
      gender: userProfile?.gender || "",
      phoneNumber: userProfile?.phoneNumber || "",
    },
  });

  useEffect(() => {
    if (userProfile) {
      reset({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        email: userProfile.email || "",
        gender: userProfile.gender || "",
        phoneNumber: userProfile.phoneNumber || "",
      });
    }
    if (userProfile?.avatarImage) {
      setUserAvatar({ uri: userProfile.avatarImage } as any);
    }
  }, [userProfile]);

  const openPicker = async (selectType: "image" | "video") => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: selectType === "image" ? ["image/*"] : ["video/*"],
        copyToCacheDirectory: true,
      });

      // If user cancels
      if (result.canceled) {
        Toast.show({
          type: "error",
          text1: "Cancelled",
          text2: "You cancelled the file picker",
        });
        return;
      }

      // Success result
      if (result.assets.length > 0) {
        const asset = result.assets[0];
        const pickedFile: UserAvatar = {
          uri: asset.uri,
          name: asset.name,
          type:
            asset.mimeType ??
            (selectType === "image" ? "image/jpeg" : "video/mp4"),
          size: asset.size,
        };
        setUserAvatar(pickedFile);
        await fileUploadHandler(pickedFile);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to pick document",
      });
    }
  };

  const fileUploadHandler = async (file: UserAvatar) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      name: file.name,
      type: file.type,
    } as any);

    try {
      const uploadResponse = await filesUploadRequest({ formData });
      if (uploadResponse?.success) {
        const payload = { avatarImage: uploadResponse.data.fileUrl };
        updateUserProfile({ payload }, { onSuccess: () => {} });
      } else {
        throw new Error("Upload failed");
      }
    } catch {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to upload file, please try again!",
      });
    }
  };

  const onSavePress = async () => {
    const { firstName, lastName, phoneNumber, email, gender } = getValues();
    const payload = { firstName, lastName, phoneNumber, email, gender };
    updateUserProfile({ payload }, { onSuccess: () => {} });
  };

  return (
    <View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32 }}
      >
        <View>
          <View className="flex-col items-center justify-center flex mb-5">
            <View className="flex items-center relative">
              <Image
                source={
                  userAvatar
                    ? { uri: userAvatar.uri }
                    : userProfile?.avatarImage
                      ? { uri: userProfile.avatarImage }
                      : { uri: avatarPlaceholderUrl }
                }
                className="size-24 relative rounded-full border border-[#E8A0BF]"
              />
              <TouchableOpacity
                onPress={() => openPicker("image")}
                className="absolute bottom-2 -right-3 shadow-md bg-[#E8A0BF] p-2 rounded-full"
              >
                <Ionicons name="camera-outline" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View className="flex items-center">
              <Text className="text-lg font-medium text-[#E8A0BF] mt-2">
                Change Photo
              </Text>
            </View>
          </View>
          <View className="bg-white border border-[#E8E8E8] p-4 rounded-2xl gap-7 mt-6">
            <FormField
              title="Full Name"
              control={control}
              name="fullName"
              rules={{
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name should be minimum 3 characters long",
                },
              }}
              placeholder="Aria Johnson |"
              keyboardType="default"
            />
            <FormField
              title="Business Name"
              control={control}
              name="businessName"
              rules={{
                required: "Business name is required",
                minLength: {
                  value: 3,
                  message: "Business name should be minimum 3 characters long",
                },
              }}
              placeholder="Makeup by Aria"
              keyboardType="default"
            />
            <FormField
              title="Bio"
              control={control}
              name="bio"
              rules={{
                required: "Bio is required",
                minLength: {
                  value: 3,
                  message: "Bio should be minimum 3 characters long",
                },
              }}
              placeholder="Tell clients about yourself and your expertise."
              keyboardType="default"
            />
          </View>
          <View className="bg-white border border-[#E8E8E8] p-4 rounded-2xl gap-7 mt-6">
            <FormField
              title="Years of Experience"
              control={control}
              name="yearsOfExperience"
              rules={{
                required: "Years of Experience is required",
                minLength: {
                  value: 1,
                  message: "Years of Experience must be at least 1 digit",
                },
                maxLength: {
                  value: 2,
                  message: "Years of Experience cannot exceed 2 digits",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Years of Experience must contain only digits",
                },
              }}
              placeholder="8 years"
              keyboardType="phone-pad"
            />
            <FormField
              title="Specialization"
              control={control}
              name="specialization"
              rules={{
                required: "Specialization is required",
                minLength: {
                  value: 3,
                  message: "Specialization must be at least 3 characters long",
                },
              }}
              placeholder="Specialization (e.g., Bridal Makeup, Fashion Makeup)"
              keyboardType="default"
            />
          </View>
          <View className="bg-white border border-[#E8E8E8] p-4 rounded-2xl gap-7 mt-6">
            <FormField
              title="Location"
              control={control}
              name="location"
              rules={{
                required: "Location is required",
                minLength: {
                  value: 3,
                  message: "Location must be at least 3 characters long",
                },
              }}
              placeholder="Location (e.g., London, UK)"
              keyboardType="default"
            />
          </View>
        </View>
        <CustomButton
          title={isPending ? "Saving..." : "Save Changes"}
          handlePress={handleSubmit(onSavePress)}
          className="mb-32 mt-16 rounded-3xl bg-[#E8A0BF]"
          textStyles="text-white font-medium"
        />
      </Animated.ScrollView>
    </View>
  );
};

export default ProfileAndBusiness;
