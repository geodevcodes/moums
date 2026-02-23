import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface BookingCardProps {
  id: string;
  name: string;
  description: string;
  status: "Pending" | "Confirmed";
  date: string;
  time: string;
  price: string;
  imageUrl: string;
  bg: string;
  color: string;
  onPress?: () => void;
}

export function BookingsCard({
  name,
  description,
  status,
  date,
  time,
  price,
  imageUrl,
  bg,
  color,
  onPress,
}: BookingCardProps) {
  const isPending = status === "Pending";

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mb-4">
      <View
        style={{
          borderColor: isPending ? "#FDBA74" : "#E5E7EB",
        }}
        className="bg-white rounded-2xl p-4 border h-32"
      >
        <View className="flex-row justify-between items-start">
          <View className="flex-row gap-4 flex-1">
            <Image
              source={{ uri: imageUrl }}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold text-[#232429]">
                {name}
              </Text>
              <Text className="text-sm text-[#667085] mt-1">{description}</Text>
              <View className="flex-row items-center gap-4 mt-3">
                <View className="flex-row items-center gap-1">
                  <Feather name="calendar" size={14} color="#667085" />
                  <Text className="text-sm text-[#667085]">{date}</Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <Feather name="clock" size={14} color="#667085" />
                  <Text className="text-sm text-[#667085]">{time}</Text>
                </View>

                <Text className="text-sm font-medium text-[#E8A0BF]">
                  {price}
                </Text>
              </View>
            </View>
          </View>
          <View className="items-end justify-between h-full">
            <View
              style={{ backgroundColor: bg }}
              className="px-3 py-1 rounded-full flex-row items-center gap-1"
            >
              {isPending ? (
                <Ionicons name="alert-circle-outline" size={14} color={color} />
              ) : (
                <Feather name="check-circle" size={14} color={color} />
              )}

              <Text style={{ color }} className="text-xs font-medium">
                {status}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#98A2B3"
              className="mt-4"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}


// Today's Booking Card
export function BookingsCardTwo({
  name,
  description,
  status,
  date,
  time,
  price,
  imageUrl,
  bg,
  color,
  onPress,
}: BookingCardProps) {
  const isPending = status === "Pending";

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mb-4">
      <View
        style={{
          borderColor: isPending ? "#FDBA74" : "#E5E7EB",
        }}
        className="bg-white rounded-2xl p-4 border h-32"
      >
        <View className="flex-row justify-between items-start">
          <View className="flex-row gap-4 flex-1">
            <Image
              source={{ uri: imageUrl }}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold text-[#232429]">
                {name}
              </Text>
              <Text className="text-sm text-[#667085] mt-1">{description}</Text>
              <View className="flex-row items-center gap-4 mt-3">
                <View className="flex-row items-center gap-1">
                  <Feather name="calendar" size={14} color="#667085" />
                  <Text className="text-sm text-[#667085]">{date}</Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <Feather name="clock" size={14} color="#667085" />
                  <Text className="text-sm text-[#667085]">{time}</Text>
                </View>

                <Text className="text-sm font-medium text-[#E8A0BF]">
                  {price}
                </Text>
              </View>
            </View>
          </View>
          <View className="items-end justify-between h-full">
            <View
              style={{ backgroundColor: bg }}
              className="px-2 py-2 rounded-full flex-row items-center gap-1"
            >
              {isPending ? (
                <Ionicons name="alert-circle-outline" size={14} color={color} />
              ) : (
                <Feather name="check-circle" size={14} color={color} />
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
