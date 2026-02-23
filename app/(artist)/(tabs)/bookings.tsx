import { BookingsCard } from "@/components/cards/BookingsCard";
import EmptyState from "@/components/EmptyState";
import images from "@/constants/images";
import { bookingsData } from "@/lib/data/bookingsData";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookings = () => {
  const [bookingStatusTabs, setBookingStatusTabs] = useState("Upcoming");
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <SafeAreaView className="px-8 pt-8 pb-2  bg-[#FFFAFA] h-full">
      <View className="flex flex-row items-center gap-3">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="max-w-[50px] flex items-start justify-start shadow-md text-white rounded-lg p-1.5"
        >
          <View className="flex flex-row items-center justify-between gap-3">
            <Ionicons name="chevron-back" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex flex-col gap-2">
          <Text className="text-[#2E2E2E] font-bold text-xl">
            Manage Bookings
          </Text>
        </View>
      </View>
      {/* ======= TABS ===== */}
      <View className="mt-8 p-1.5 mb-1.5 bg-[#FFFFFF] rounded-3xl flex flex-row items-center justify-between">
        <Pressable
          onPress={() => setBookingStatusTabs("Upcoming")}
          className="w-1/3"
        >
          <Text
            className={`${
              bookingStatusTabs === "Upcoming"
                ? "bg-[#E8A0BF]/90 text-white"
                : "bg-[#FFFFFF] text-[#808080]"
            } text-lg text-center p-2 rounded-xl`}
          >
            Upcoming
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setBookingStatusTabs("Completed")}
          className="w-1/3"
        >
          <Text
            className={`${
              bookingStatusTabs === "Completed"
                ? "bg-[#E8A0BF]/90 text-white"
                : "bg-[#FFFFFF] text-[#808080]"
            } text-lg text-center p-2 rounded-xl`}
          >
            Completed
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setBookingStatusTabs("Cancelled")}
          className="w-1/3"
        >
          <Text
            className={`${
              bookingStatusTabs === "Cancelled"
                ? "bg-[#E8A0BF]/90 text-white"
                : "bg-[#FFFFFF] text-[#808080]"
            } text-lg text-center p-2 rounded-xl`}
          >
            Cancelled
          </Text>
        </Pressable>
      </View>

      {bookingStatusTabs === "Upcoming" && (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View className="flex flex-row items-center gap-2">
            <Text className="text-xl font-semibold text-[#232429] mb-4">
              {bookingsData.length}
            </Text>
            <Text className="text-sm font-medium text-[#667085] mb-4">
              upcoming bookings
            </Text>
          </View>

          {bookingsData.map((item) => (
            <BookingsCard
              onPress={() =>
                router.push(`/(artist)/(others)/booking-details/${item.id}`)
              }
              key={item.id}
              {...item}
              status={item.status as "Pending" | "Confirmed"}
            />
          ))}
        </Animated.ScrollView>
      )}
      {bookingStatusTabs === "Completed" && (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View className="flex flex-row items-center gap-2">
            <Text className="text-xl font-semibold text-[#232429] mb-4">
              {bookingsData.length}
            </Text>
            <Text className="text-sm font-medium text-[#667085] mb-4">
              upcoming bookings
            </Text>
          </View>
          {bookingsData
            .filter((item) => item.status === "Confirmed")
            .map((item) => (
              <BookingsCard
                key={item.id}
                onPress={() =>
                  router.push(`/(artist)/(others)/booking-details/${item.id}`)
                }
                {...item}
                status={item.status as "Confirmed"}
              />
            ))}
        </Animated.ScrollView>
      )}

      {bookingStatusTabs === "Cancelled" && (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <EmptyState imageUrl={images.trash} title="No Cancelled Bookings" />
        </Animated.ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Bookings;
