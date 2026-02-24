import icons from "@/constants/icons";
import { Image, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";

interface SocialAuthProps {
  title?: string;
}

const SocialAuth = ({ title }: SocialAuthProps) => {
  const handleGoogleSignIn = async () => {
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Sorry, Google Auth still in development",
    });
  };
  const handleFacebookSignIn = async () => {
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Sorry, Facebook Auth still in development",
    });
  };
  const handleAppleSignIn = async () => {
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Sorry, Apple Auth still in development",
    });
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3 max-w-[250px] w-full mx-auto">
        <View className="flex-1 h-[0.5px] bg-[#6D6D6D]" />
        <Text className="text-lg">{title}</Text>
        <View className="flex-1 h-[0.5px] bg-[#6D6D6D]" />
      </View>

      <View className="flex flex-row gap-5 mt-5 items-center justify-center">
        <Pressable onPress={handleGoogleSignIn}>
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
        <Pressable onPress={handleFacebookSignIn}>
          <Image
            source={icons.facebook}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
        <Pressable onPress={handleAppleSignIn}>
          <Image
            source={icons.apple}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SocialAuth;
