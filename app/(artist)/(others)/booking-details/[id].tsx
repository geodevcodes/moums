import { bookingsData } from "@/lib/data/bookingsData";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BookingDetails = () => {
  const { id } = useLocalSearchParams();
  const [status, setStatus] = useState("Pending");
  const router = useRouter();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", id],
    queryFn: () => {
      const allItems = bookingsData.find((item) => item.id === id);
      return allItems;
    },
  });

  const isPending = status === "Pending";
  const isConfirmed = status === "Confirmed";
  const isCompleted = status === "Completed";

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#FFFAFA]">
        <ActivityIndicator size="large" color="#E8A0BF" />
      </SafeAreaView>
    );
  }
  if (!bookings) return null;

  console.log("Parsed Booking:", bookings);
  return (
    <SafeAreaView className="bg-[#FFFAFA] px-6 pt-6 h-full">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-bold text-[#2E2E2E]">
          Booking Details
        </Text>

        <Pressable onPress={() => router.back()}>
          <Ionicons name="close" size={22} color="#2E2E2E" />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Client Card */}
        <View className="bg-[#F8EDEF] rounded-2xl p-4 mb-6">
          <View className="flex-row items-center gap-4">
            <Image
              source={{ uri: bookings?.imageUrl }}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-semibold text-base">{bookings?.name}</Text>
              <View
                className={`mt-2 self-start px-3 py-1 rounded-full ${
                  isPending
                    ? "bg-[#FFE8D6]"
                    : isConfirmed
                      ? "bg-[#DCFCE7]"
                      : "bg-[#E5E7EB]"
                }`}
              >
                <Text
                  className={`text-xs font-medium ${
                    isPending
                      ? "text-[#CA3500]"
                      : isConfirmed
                        ? "text-[#008236]"
                        : "text-[#344054]"
                  }`}
                >
                  {status}
                </Text>
              </View>
            </View>
          </View>

          <Text className="text-sm text-[#667085] mt-4">+44 7700 900456</Text>
          <Text className="text-sm text-[#667085] mt-1">client@email.com</Text>
        </View>

        {/* Booking Info */}
        <View className="space-y-5">
          <InfoRow label="Service" value={`${bookings?.description}`} />
          <InfoRow
            label="Date & Time"
            value={`${bookings?.date} • ${bookings?.time}`}
          />
          <InfoRow label="Address" value="123 High Street, London, SW1A 1AA" />
          <InfoRow label="Price" value={`£${bookings?.price}`} price />
        </View>

        {/* Notes */}
        <View className="mt-6 bg-[#FFF7ED] border border-[#FDBA74] rounded-xl p-4">
          <Text className="text-sm font-semibold text-[#CA3500] mb-1">
            Notes
          </Text>
          <Text className="text-sm text-[#7A2E0E]">
            Client prefers natural look with focus on skin prep.
          </Text>
        </View>

        {/* Buttons */}
        <View className="mt-8">
          {isPending && (
            <View className="flex-row gap-4">
              <Pressable
                onPress={() => setStatus("Confirmed")}
                className="flex-1 bg-[#16A34A] py-4 rounded-xl items-center"
              >
                <Text className="text-white font-semibold">Accept</Text>
              </Pressable>

              <Pressable
                onPress={() => setStatus("Completed")}
                className="flex-1 bg-[#E5E7EB] py-4 rounded-xl items-center"
              >
                <Text className="text-[#344054] font-semibold">Decline</Text>
              </Pressable>
            </View>
          )}

          {isConfirmed && (
            <Pressable
              onPress={() => {}}
              className="bg-[#E8A0BF] py-4 rounded-xl items-center"
            >
              <Text className="text-white font-semibold">Update Status</Text>
            </Pressable>
          )}

          {isCompleted && (
            <View className="flex-row gap-4">
              <Pressable className="flex-1 bg-[#2563EB] py-4 rounded-xl items-center">
                <Text className="text-white font-semibold">Complete</Text>
              </Pressable>

              <Pressable className="flex-1 bg-[#6B7280] py-4 rounded-xl items-center">
                <Text className="text-white font-semibold">Cancel</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoRow = ({
  label,
  value,
  price,
}: {
  label: string;
  value: string;
  price?: boolean;
}) => (
  <View className="border-b border-[#F2F4F7] pb-4">
    <Text className="text-sm text-[#667085] mb-1">{label}</Text>
    <Text
      className={`text-sm font-medium ${
        price ? "text-[#E8A0BF]" : "text-[#2E2E2E]"
      }`}
    >
      {value}
    </Text>
  </View>
);

export default BookingDetails;
