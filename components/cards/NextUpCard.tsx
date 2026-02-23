import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface NextUpCardProps {
  name: string;
  service: string;
  time: string;
  price: string;
  duration: string;
  image: string;
}

const NextUpCard = ({
  name,
  service,
  time,
  price,
  duration,
  image,
}: NextUpCardProps) => {
  return (
    <View className="bg-white rounded-3xl p-5 shadow-md">
      <View className="flex-row items-center gap-3">
        <Image source={{ uri: image }} className="w-14 h-14 rounded-full" />

        <View className="flex-1">
          <Text className="font-semibold text-gray-800">{name}</Text>
          <Text className="text-sm text-gray-500 mt-1">{service}</Text>

          <View className="flex-row items-center gap-4 mt-2">
            <View className="flex-row items-center gap-1">
              <Feather name="clock" size={14} color="#6B7280" />
              <Text className="text-xs text-gray-500">{time}</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="border-t border-gray-200 mt-4 pt-4 flex-row justify-between items-center">
        <Text className="text-pink-400 font-semibold">
          {price} • {duration}
        </Text>

        <TouchableOpacity className="bg-[#E8A0BF] px-4 py-2 rounded-full">
          <Text className="text-white text-sm font-medium">View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NextUpCard;
