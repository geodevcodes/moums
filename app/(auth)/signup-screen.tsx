import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { EMAIL_REGEX } from "@/lib/lib";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function SignupScreen() {
  const { control, handleSubmit, getValues } = useForm();
  const router = useRouter();

  const handleNext = () => {
    const { password, confirmPassword } = getValues();

    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match",
      });
      return;
    }
    router.replace("/(auth)/login-screen");
    // router.push("/(artist)/onboarding/verification-1");
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full px-8 mt-4">
          <Text className="text-2xl font-semibold text-[#232429] mt-16 text-center">
            Create Artist Account
          </Text>
          <Text className="text-base text-[#535862] text-center max-w-sm mx-auto mt-4">
            Join our community of talented beauty professionals
          </Text>
          <FormField
            title="Full Name"
            control={control}
            name="fullName"
            rules={{
              required: "FullName is required",
            }}
            placeholder="Enter your Full name"
            keyboardType="text"
            otherStyles="mt-7"
          />
          <FormField
            title="Business Name"
            control={control}
            name="businessName"
            rules={{
              required: "Business name is required",
            }}
            placeholder="Brides by Lucia"
            keyboardType="text"
            otherStyles="mt-7"
          />
          <FormField
            title="Email Address"
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            }}
            placeholder="your.email@example.com"
            keyboardType="email-address"
            otherStyles="mt-7"
          />
          <FormField
            title="Phone Number"
            control={control}
            name="text"
            rules={{
              required: "Phone number is required",
            }}
            placeholder="Enter your Phone Number"
            keyboardType="number"
            otherStyles="mt-7"
          />
          <FormField
            title="Address"
            control={control}
            name="address"
            rules={{
              required: "Address is required",
            }}
            placeholder="Enter your Address"
            keyboardType="text"
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be minimum 6 characters long",
              },
            }}
            placeholder="Create a Password"
            otherStyles="mt-7"
          />
          <FormField
            title="Confirm Password"
            control={control}
            name="confirmPassword"
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Confirm Password should be minimum 6 characters long",
              },
            }}
            placeholder="Re-enter your ppassword"
            otherStyles="mt-7"
          />
          <CustomButton
            title={"Continue"}
            handlePress={handleSubmit(handleNext)}
            className="mt-16 rounded-3xl bg-[#E8A0BF]"
            textStyles="text-white font-medium"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
