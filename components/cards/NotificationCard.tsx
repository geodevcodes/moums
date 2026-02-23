import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface NotificationCardProps {
  title: string;
  time: string;
  notificationType: "alert" | "info";
}

const NotificationCard = ({
  title,
  time,
  notificationType,
}: NotificationCardProps) => {
  const isAlert = notificationType === "alert";
  return (
    <View
      className={`p-4 rounded-2xl mb-3 border ${
        isAlert ? "bg-pink-50 border-pink-200" : "bg-blue-50 border-blue-200"
      }`}
    >
      <View className="flex-row items-center gap-3">
        <View
          className={`p-2 rounded-full ${
            isAlert ? "bg-pink-200" : "bg-blue-200"
          }`}
        >
          <Ionicons
            name={isAlert ? "notifications-outline" : "time-outline"}
            size={18}
            color={isAlert ? "#DB2777" : "#2563EB"}
          />
        </View>

        <View className="flex-1">
          <Text className="font-normal text-gray-800">{title}</Text>
          <Text className="text-xs text-gray-500 mt-1">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
