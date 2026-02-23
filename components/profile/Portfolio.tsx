import CustomButton from "@/components/CustomButton";
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Portfolio = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*"],
      copyToCacheDirectory: true,
    });
    if (!result.canceled && result.assets.length > 0) {
      setPickedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-[#FFFAFA] px-5 h-full">
      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
          <Text className="text-xl font-semibold text-center text-[#1E1E1E]">
            Showcase Your Work
          </Text>
          <Text className="text-sm text-center text-[#6D6D6D] mt-2 w-3/5 mx-auto leading-5">
            Upload photos that highlight your skills and signature looks.
          </Text>
        </View>

        {/* EMPTY STATE */}
        <View className="mt-8 max-h-[50%] border border-[#F4C2CF] rounded-2xl p-8 items-center bg-white">
          <View className="w-14 h-14 rounded-full bg-[#FFE8EE] items-center justify-center mb-4">
            <Text className="text-xl text-[#E48CA3]">
              <Feather name="image" size={18} color="#E48CA3" />
            </Text>
          </View>
          <Text className="font-semibold text-[#1E1E1E]">
            No Portfolio Items Yet
          </Text>
          <Text className="text-[#6D6D6D] text-sm text-center mt-2 leading-5">
            Start building your portfolio by adding your best work
          </Text>
          <CustomButton
            handlePress={() => setModalVisible(true)}
            title={"+ Add Your First Photo"}
            className="mb-32 mt-16 rounded-3xl bg-[#E8A0BF] w-[90%]"
            textStyles="text-white font-medium"
          />
        </View>
        <View>
          <CustomButton
            title={"Continue"}
            className={`mb-4 mt-12 rounded-3xl ${
              pickedImage ? "bg-[#E8A0BF]" : "bg-[#F4A6B8]/40"
            }`}
            textStyles="text-white font-medium"
          />
          <Text className="text-center text-xs text-[#6D6D6D]">
            0/3 photos minimum
          </Text>
        </View>
      </Animated.ScrollView>

      {/* MODAL */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 bg-black/30 justify-center px-6">
          <View className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
              <Text className="font-semibold text-lg">Add Photo</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text className="text-lg text-[#6D6D6D]">✕</Text>
              </Pressable>
            </View>

            <Text className="text-sm font-medium mb-2 text-[#2E2E2E]">
              Upload Image <Text className="text-[#E8A0BF]">*</Text>
            </Text>
            <Pressable
              onPress={openPicker}
              className="border-2 border-dashed border-[#F4C2CF] rounded-2xl h-64 items-center justify-center bg-[#FFF5F8]"
            >
              {!pickedImage ? (
                <>
                  <View className="w-12 h-12 rounded-full bg-[#FFE8EE] items-center justify-center mb-3">
                    <Feather name="upload" size={24} color="#E48CA3" />
                  </View>
                  <Text className="text-[#E48CA3] font-medium">
                    Click to Upload
                  </Text>
                  <Text className="text-xs text-[#6D6D6D] mt-1">
                    JPG, PNG up to 10MB
                  </Text>
                </>
              ) : (
                <View className="relative w-full h-full">
                  <Image
                    source={{ uri: pickedImage }}
                    className="w-full h-full rounded-2xl"
                    resizeMode="cover"
                  />
                  <Pressable
                    onPress={() => setPickedImage(null)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white items-center justify-center"
                  >
                    <Text className="text-xs">✕</Text>
                  </Pressable>
                </View>
              )}
            </Pressable>
            <View className="flex-row justify-between gap-4 mt-6">
              <CustomButton
                handlePress={() => setModalVisible(false)}
                title={"Cancel"}
                className="rounded-3xl border border-[#E8E8E8] w-1/2"
                textStyles="text-[#6D6D6D] font-medium"
              />
              <CustomButton
                handlePress={() => setModalVisible(false)}
                title={"Add Photo"}
                className={`rounded-3xl w-1/2 ${
                  pickedImage ? "bg-[#E8A0BF]" : "bg-[#F4A6B8]/40"
                }`}
                textStyles="text-white font-medium"
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Portfolio;
