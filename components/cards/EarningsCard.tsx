import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface EarningsCardProps {
  today: string;
  week: string;
  month: string;
}

interface BalanceCardProps {
  totalBalance: string;
  status: string;
  totalAmount: string;
}

export function EarningsCard({ today, week, month }: EarningsCardProps) {
  return (
    <View className="bg-[#E8A0BF] rounded-3xl p-6 shadow-lg mb-6">
      <View className="flex-row items-center gap-2 mb-4">
        <Feather name="trending-up" size={18} color="white" />
        <Text className="text-white font-semibold text-base">
          Earnings Overview
        </Text>
      </View>
      <View className="flex-row gap-20 mb-5">
        <View>
          <Text className="text-white/80 text-xs">Today</Text>
          <Text className="text-white font-bold text-xl mt-1">{today}</Text>
        </View>
        <View>
          <Text className="text-white/80 text-xs">This Week</Text>
          <Text className="text-white font-bold text-xl mt-1">{week}</Text>
        </View>
        <View>
          <Text className="text-white/80 text-xs">This Month</Text>
          <Text className="text-white font-bold text-xl mt-1">{month}</Text>
        </View>
      </View>
      <View className="border-t border-white/30 pt-4 flex-row justify-between items-center">
        <Text className="text-white/80 text-xs">5/8 completed today</Text>
        <TouchableOpacity>
          <View className="flex flex-row items-center gap-2">
            <Text className="text-white font-semibold text-sm">View All</Text>
            <Ionicons name="chevron-forward" size={14} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function BalanceCard({
  totalBalance,
  status,
  totalAmount,
}: BalanceCardProps) {
  return (
    <View className="bg-[#E8A0BF] rounded-3xl p-6 shadow-lg mb-6">
      <View className="flex-row items-center gap-2 mb-3">
        <Feather name="trending-up" size={18} color="white" />
        <Text className="text-white font-semibold text-base">
          Available Balance
        </Text>
      </View>
      <Text className="text-white font-bold text-3xl mt-1 mb-3">
        {totalBalance}
      </Text>
      <View className="border-t border-white/30 pt-4 flex-row justify-between items-center">
        <View className="gap-2">
          <Text className="text-white/80 text-xs">{status}</Text>
          <Text className="text-white/80 font-bold text-lg">{totalAmount}</Text>
        </View>
        <TouchableOpacity className="bg-white px-4 py-2 rounded-md">
          <Text className="text-[#E8A0BF] text-sm font-bold">Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
