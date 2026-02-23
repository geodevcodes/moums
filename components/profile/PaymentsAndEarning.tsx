import { BalanceCard } from "@/components/cards/EarningsCard";
import { overviewData } from "@/lib/data/profileData";
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

const PaymentsAndEarning = () => {
  const [statusTabs, setStatusTabs] = useState("Overview");
  const onSavePress = async () => {};

  return (
    <View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 120 }}
      >
        <View className="mt-4">
          <BalanceCard
            totalBalance="£1,240"
            status="Pending"
            totalAmount="£380"
          />
        </View>

        {/* ====statistic card====== */}
        <View className="flex-row gap-2 mt-3">
          <View className="w-[32%] bg-white border border-[#E8E8E8] p-6  items-center justify-center rounded-xl">
            <View className="items-center gap-2">
              <View className="flex flex-row gap-3 items-center">
                <Text className="text-2xl text-[#E8A0BF] font-bold">
                  £1,240
                </Text>
              </View>
              <Text className="text-xs text-[#6D6D6D]">this month</Text>
            </View>
          </View>
          <View className="w-[32%] bg-white border border-[#E8E8E8] p-6  items-center justify-center py-3 rounded-xl">
            <View className="items-center gap-2">
              <View className="flex flex-row gap-3 items-center">
                <Text className="text-2xl font-bold">£980</Text>
              </View>
              <Text className="text-xs text-[#6D6D6D]">Last Month</Text>
            </View>
          </View>
          <View className="w-[32%] bg-white border border-[#E8E8E8] p-6  items-center justify-center py-3 rounded-xl">
            <View className="items-center gap-2">
              <View className="flex flex-row gap-1 items-center">
                <Feather name="trending-up" size={18} color="#00A63E" />
                <Text className="text-2xl text-[#00A63E] font-bold">+26%</Text>
              </View>
              <Text className="text-xs text-[#6D6D6D]">Growth</Text>
            </View>
          </View>
        </View>

        {/* ======= TABS ===== */}
        <View className="mt-4 p-1.5 mb-1.5 rounded-3xl flex flex-row gap-4 items-center justify-between">
          <Pressable
            onPress={() => setStatusTabs("Overview")}
            className="w-[47%]"
          >
            <Text
              className={`${
                statusTabs === "Overview"
                  ? "bg-[#E8A0BF]/90 text-white"
                  : "bg-[#FFFFFF] text-[#808080] border border-[#E8E8E8]"
              } text-lg text-center p-2 rounded-xl`}
            >
              Overview
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setStatusTabs("Transactions")}
            className="w-[47%]"
          >
            <Text
              className={`${
                statusTabs === "Transactions"
                  ? "bg-[#E8A0BF]/90 text-white"
                  : "bg-[#FFFFFF] text-[#808080] border border-[#E8E8E8]"
              } text-lg text-center p-2 rounded-xl`}
            >
              Transactions
            </Text>
          </Pressable>
        </View>

        <View className="bg-white border border-[#E8E8E8] p-7 rounded-2xl gap-7 mt-4">
          <Text className="font-bold text-lg">Total Lifetime Earnings</Text>
          <View className="gap-4">
            <Text className="text-[#E8A0BF] text-2xl font-extrabold max-w-[90%] leading-7">
              £12,450
            </Text>
            <Text className="text-sm">
              Across all bookings since you joined
            </Text>
          </View>
        </View>
        {/* ======== OVERVIEW ======== */}
        <View className="mt-6 mb-2 gap-3">
          {overviewData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex flex-row bg-white border border-[#E8E8E8] p-4 items-center justify-between py-3 rounded-xl"
            >
              <View className="flex flex-row items-center gap-3">
                <View
                  style={{ backgroundColor: item.bg }}
                  className="p-3 rounded-lg"
                >
                  {item.icon}
                </View>
                <View className="gap-1">
                  <Text className="text-base font-medium text-gray-600">
                    {item.name}
                  </Text>
                  <Text className="text-xs text-gray-600">
                    {item.description}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#BEBEBE" />
            </TouchableOpacity>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default PaymentsAndEarning;
