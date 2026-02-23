import AccountSettings from "@/components/profile/AccountSettings";
import Availability from "@/components/profile/Availability";
import MyServices from "@/components/profile/MyServices";
import Notification from "@/components/profile/Notification";
import PaymentsAndEarning from "@/components/profile/PaymentsAndEarning";
import PerformaceInsights from "@/components/profile/PerformanceInsights";
import Portfolio from "@/components/profile/Portfolio";
import PersonalInformation from "@/components/profile/ProfileAndBusiness";
import Reviews from "@/components/profile/Reviews";
import TermsAndConditions from "@/components/profile/TermsAndConditions";
import { profileData } from "@/lib/data/profileData";
import { FontAwesome6 } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings", id],
    queryFn: () => {
      const allItems = profileData.flatMap((section) => section.items);
      return allItems.find((item) => item.id === id);
    },
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#ff6600" />;
  }

  return (
    <SafeAreaView className="px-8 pt-4 pb-2 bg-[#FFFAFA] h-full">
      <View className="flex flex-row items-center mt-4 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="max-w-[50px] flex items-start justify-start border border-[#A9AEB7] rounded-lg p-1.5"
        >
          <View className="flex flex-row items-center justify-between gap-3">
            <FontAwesome6 name="arrow-left-long" size={16} color="#414349" />
          </View>
        </TouchableOpacity>
        <Text className="text-black font-semibold text-xl ml-6">
          {settings?.name}
        </Text>
      </View>

      <View>
        {settings?.name === "Edit Profile" && <PersonalInformation />}
        {settings?.name === "Payments & Earning" && <PaymentsAndEarning />}
        {settings?.name === "Portfolio" && <Portfolio />}
        {settings?.name === "Availability" && <Availability />}
        {settings?.name === "My Services" && <MyServices />}
        {settings?.name === "Reviews" && <Reviews />}
        {settings?.name === "Performance Insights" && <PerformaceInsights />}
        {settings?.name === "Account Settings" && <AccountSettings />}
        {settings?.name === "Notification" && <Notification />}
        {settings?.name === "Terms & Condition" && <TermsAndConditions />}
      </View>
    </SafeAreaView>
  );
};

export default ProfileDetails;
