import CustomButton from "@/components/CustomButton";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyDetails() {
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [addressConfirmed, setAddressConfirmed] = useState(false);

  const allVerified = emailVerified && phoneVerified && addressConfirmed;

  const activeColor = "#22C55E";
  const inactiveColor = "#E5E7EB";

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFB]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 8 }}
      >
        <View className="px-6 mt-10">
          {/* Title */}
          <Text className="text-2xl font-semibold text-[#232429] text-center">
            Verify Your Details
          </Text>

          <Text className="text-base text-[#667085] text-center mt-2 max-w-sm px-4 mx-auto leading-6">
            To keep MOUMS safe and trusted, we need to verify your contact
            details and work location.
          </Text>

          {/* ================= STEP INDICATOR ================= */}
          <View className="flex-row items-center justify-center mt-6">
            {/* Circle 1 */}
            <View
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: allVerified ? activeColor : inactiveColor,
              }}
            />

            {/* Line */}
            <View
              className="h-[1.5px] w-6 mx-2"
              style={{
                backgroundColor: allVerified ? activeColor : inactiveColor,
              }}
            />

            {/* Circle 2 */}
            <View
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: allVerified ? activeColor : inactiveColor,
              }}
            />

            {/* Line */}
            <View
              className="h-[1.5px] w-6 mx-2"
              style={{
                backgroundColor: allVerified ? activeColor : inactiveColor,
              }}
            />

            {/* Circle 3 */}
            <View
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: allVerified ? activeColor : inactiveColor,
              }}
            />
          </View>

          {/* ================= EMAIL CARD ================= */}
          <View
            className={`mt-8 rounded-2xl p-5 border bg-white ${
              emailVerified ? "border-[#22C55E]" : "border-[#EAECF0]"
            }`}
          >
            <View className="flex-row items-start">
              <View
                className={`h-12 w-12 rounded-xl items-center justify-center ${
                  emailVerified ? "bg-[#E8F8EE]" : "bg-[#F2F4F7]"
                }`}
              >
                <Feather
                  name="mail"
                  size={22}
                  color={emailVerified ? "#22C55E" : "#98A2B3"}
                />
              </View>

              <View className="ml-4 flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-semibold text-[#232429]">
                    Verify Email
                  </Text>

                  {emailVerified && (
                    <View className="flex-row items-center space-x-1">
                      <Feather name="check" size={16} color="#22C55E" />
                      <Text className="text-base text-[#22C55E] font-medium">
                        Verified
                      </Text>
                    </View>
                  )}
                </View>

                <Text className="text-base text-[#667085] mt-1">
                  sophia@luxebeauty.com
                </Text>
                {!emailVerified && (
                  <View className="w-[70%] mr-auto">
                    <Pressable
                      onPress={() => setEmailVerified(true)}
                      className="mt-4 bg-[#E8A0BF1A] rounded-xl py-3 items-center"
                    >
                      <Text className="text-[#E8A0BF] font-medium">
                        Send Verification Code
                      </Text>
                    </Pressable>
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* ================= PHONE CARD ================= */}
          <View
            className={`mt-5 rounded-2xl p-5 border bg-white ${
              phoneVerified ? "border-[#22C55E]" : "border-[#EAECF0]"
            }`}
          >
            <View className="flex-row items-start">
              <View
                className={`h-12 w-12 rounded-xl items-center justify-center ${
                  phoneVerified ? "bg-[#E8F8EE]" : "bg-[#F2F4F7]"
                }`}
              >
                <Feather
                  name="phone"
                  size={22}
                  color={phoneVerified ? "#22C55E" : "#98A2B3"}
                />
              </View>

              <View className="ml-4 flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-semibold text-[#232429]">
                    Verify Phone Number
                  </Text>

                  {phoneVerified && (
                    <View className="flex-row items-center space-x-1">
                      <Feather name="check" size={16} color="#22C55E" />
                      <Text className="text-base text-[#22C55E] font-medium">
                        Verified
                      </Text>
                    </View>
                  )}
                </View>

                <Text className="text-base text-[#667085] mt-1">
                  +44 7700 900123
                </Text>
                {!phoneVerified && (
                  <View className="w-[50%] mr-auto">
                    <Pressable
                      onPress={() => setPhoneVerified(true)}
                      className="mt-4 bg-[#E8A0BF1A] rounded-xl py-3 items-center"
                    >
                      <Text className="text-[#E8A0BF] font-medium">
                        Send SMS Code
                      </Text>
                    </Pressable>
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* ================= ADDRESS CARD ================= */}
          <View
            className={`mt-5 rounded-2xl p-5 border bg-white ${
              addressConfirmed ? "border-[#22C55E]" : "border-[#EAECF0]"
            }`}
          >
            <View className="flex-row items-center">
              <View
                className={`h-12 w-12 rounded-xl items-center justify-center ${
                  addressConfirmed ? "bg-[#E8F8EE]" : "bg-[#F2F4F7]"
                }`}
              >
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={addressConfirmed ? "#22C55E" : "#98A2B3"}
                />
              </View>

              <View className="ml-4 flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-semibold text-[#232429]">
                    Confirm Address
                  </Text>

                  {addressConfirmed && (
                    <View className="flex-row items-center space-x-1">
                      <Feather name="check" size={16} color="#22C55E" />
                      <Text className="text-base text-[#22C55E] font-medium">
                        Confirmed
                      </Text>
                    </View>
                  )}
                </View>

                <Text className="text-base text-[#667085] mt-1">
                  The Golden house,o05
                </Text>
              </View>
            </View>

            {!addressConfirmed && (
              <View className="mt-4 bg-[#E8A0BF1A] rounded-xl p-4 w-[70%] mx-auto ">
                <Text className="text-sm text-[#667085] text-center mb-3">
                  Is this your correct work address?
                </Text>

                <View className="flex-row justify-center gap-4">
                  <Pressable
                    onPress={() => setAddressConfirmed(true)}
                    className="bg-[#E8A0BF] px-6 py-2 rounded-lg"
                  >
                    <Text className="text-white font-medium">Yes, Confirm</Text>
                  </Pressable>

                  <Pressable className="bg-white border border-[#EAECF0] px-6 py-2 rounded-lg">
                    <Text className="text-[#667085] font-medium">No</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>

          {/* ================= BOTTOM BUTTON ================= */}
          <CustomButton
            title={
              allVerified ? "Verify & Continue" : "Complete all Verification"
            }
            handlePress={() => router.push("/(auth)/login-screen")}
            textStyles="text-[#ffffff] font-medium"
            className="w-full my-10 mx-auto bg-[#E8A0BF]"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
