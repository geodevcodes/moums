import { myServicesData } from "@/lib/data/profileData";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const MyServices = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isContinueDisabled = selectedServices.length === 0;
  const selectedCountText = useMemo(
    () => `${selectedServices.length} services selected`,
    [selectedServices],
  );

  return (
    <SafeAreaView className="bg-[#FFFAFA] px-5 flex-1">
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View>
          <Text className="text-xl font-semibold text-center text-[#1E1E1E]">
            Choose the Services You Offer
          </Text>

          <Text className="text-sm text-center text-[#6D6D6D] mt-2 w-3/5 mx-auto leading-5">
            Select from MOUMS's standard services to keep booking simple and
            clear.
          </Text>
        </View>

        {/* Selected Banner */}
        {selectedServices.length > 0 && (
          <View className="mt-6 bg-[#F9E6EC] border border-[#E8A0BF] rounded-2xl px-4 py-3 flex-row items-center gap-3">
            <View className="w-6 h-6 rounded-full bg-[#E8A0BF] items-center justify-center">
              <Ionicons name="checkmark" size={14} color="white" />
            </View>
            <Text className="text-[#1E1E1E] font-medium">
              {selectedCountText}
            </Text>
          </View>
        )}

        {/* Services List */}
        <View className="mt-6 gap-4">
          {myServicesData.map((service) => {
            const isSelected = selectedServices.includes(service.id);

            return (
              <Pressable
                key={service.id}
                onPress={() => toggleService(service.id)}
                className={`flex-row items-center justify-between p-4 rounded-2xl border ${
                  isSelected
                    ? "border-[#E8A0BF] bg-white"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                {/* Left Side */}
                <View className="flex-row items-center gap-3 flex-1">
                  <Image
                    source={service.icon}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                  <Text className="text-[#1E1E1E] font-medium flex-1">
                    {service.title}
                  </Text>
                </View>

                {/* Right Circle */}
                <View
                  className={`w-6 h-6 rounded-full border items-center justify-center ${
                    isSelected
                      ? "bg-[#E8A0BF] border-[#E8A0BF]"
                      : "border-[#D0D5DD]"
                  }`}
                >
                  {isSelected && (
                    <Ionicons name="checkmark" size={14} color="white" />
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Info Box */}
        <View className="mt-8 bg-[#FFF1F5] border border-[#F2C6D5] rounded-2xl p-4 flex-row gap-3">
          <Ionicons name="sparkles-outline" size={18} color="#E8A0BF" />
          <Text className="text-xs text-[#6D6D6D] flex-1 leading-5">
            You'll set pricing and duration for each service in the next step.
            Standard services help clients find exactly what they need.
          </Text>
        </View>

        {/* Continue Button */}
        <Pressable
          disabled={isContinueDisabled}
          className={`mt-8 py-4 rounded-2xl items-center ${
            isContinueDisabled ? "bg-[#E8A0BF]/40" : "bg-[#E8A0BF]"
          }`}
        >
          <Text className="text-white font-semibold text-base">
            Continue to Service Details
          </Text>
        </Pressable>

        {isContinueDisabled && (
          <Text className="text-center text-xs text-[#98A2B3] mt-3">
            Select at least one service to continue
          </Text>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default MyServices;
