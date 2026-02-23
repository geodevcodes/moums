import CustomButton from "@/components/CustomButton";
import images from "@/constants/images";
import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function CtaScreen() {
  return (
    <SafeAreaView className="flex h-full items-center justify-between px-7 bg-[#FFF8F9]">
      <View className="flex items-center justify-center flex-1 mx-auto">
        <View>
          <View style={{ width: 420, height: 420, zIndex: 1, marginTop: 42 }}>
            <Image
              source={images.brandLogo}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </View>
      </View>

      <View className="w-full mb-32 gap-4">
        <CustomButton
          title={"Login as User"}
          handlePress={() =>
            Toast.show({
              type: "info",
              text1: "Hey there!",
              text2: "Please, Check back later, still in development",
            })
          }
          textStyles="text-[#ffffff] font-medium"
          className="w-11/12  my-0 mx-auto bg-[#E8A0BF]"
        />
        <CustomButton
          title={"Login as MakeupArtist"}
          handlePress={() => router.push("/(auth)/welcome")}
          textStyles="text-[#2E2E2E] font-medium"
          className="w-11/12 mt-2  mx-auto border-[#E8A0BF] border-2 "
        />
      </View>
    </SafeAreaView>
  );
}
