import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ArtistProfileCard = () => {
  return (
    <View className="bg-white rounded-3xl p-6 shadow-xs border border-[#F2F2F2]">
      <View className="flex-row items-center gap-4">
        <View className="relative">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=1" }}
            className="w-24 h-24 rounded-full border-2 border-[#E8A0BF]"
          />
          <View className="absolute -bottom-1 -right-1 bg-[#E8A0BF] w-8 h-8 rounded-full items-center justify-center border-2 border-white">
            <Ionicons name="checkmark" size={16} color="white" />
          </View>
        </View>
        <View className="flex-1">
          <Text className="text-2xl font-bold text-[#2E2E2E]">
            Makeup by Aria
          </Text>
          <View className="flex-row items-center mt-1 gap-2">
            <Ionicons name="checkmark" size={16} color="#667085" />
            <Text className="text-[#667085] text-base">
              Verified Makeup Artist
            </Text>
          </View>
          <View className="flex-row items-center mt-2 gap-2">
            <Ionicons name="star" size={18} color="#F4B400" />
            <Text className="text-lg font-semibold text-[#2E2E2E]">4.8</Text>
            <Text className="text-[#667085] text-base">(126 reviews)</Text>
          </View>
        </View>
      </View>
      <Pressable className="mt-6 bg-[#D98CA5] py-4 rounded-2xl items-center">
        <Text className="text-white text-lg font-semibold">
          View Public Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default ArtistProfileCard;
