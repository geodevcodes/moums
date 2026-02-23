import { BookingsCardTwo } from "@/components/cards/BookingsCard";
import { EarningsCard } from "@/components/cards/EarningsCard";
import NotificationCard from "@/components/cards/NotificationCard";
import HomeShimmer from "@/components/shimmer/HomeShimmer";
import { todayBookingsData } from "@/lib/data/bookingsData";
import { notificationData, quickActionsData } from "@/lib/data/homeData";
import { avatarPlaceholderUrl } from "@/lib/lib";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  const isLoading = false;

  return (
    <SafeAreaView className="px-5 pt-6 bg-[#F9F9F9] h-full">
      <View className="flex flex-row items-center justify-between pb-4">
        <View className="flex flex-row justify-center items-center gap-2">
          <View className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              source={{ uri: avatarPlaceholderUrl }}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>
          <View>
            <Text className="text-base text-[#232429] font-semibold">
              Welcome back,
            </Text>
            <Text className="text-xs text-[#535862]">
              Hello, Brides by Lucia!
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="my-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {isLoading ? (
              <HomeShimmer />
            ) : (
              <>
                {[1, 2, 3].map((item: any, index: number) => (
                  <TouchableOpacity
                    key={index}
                    className="mr-4 w-[350px] px-7 pr-12 py-3.5 rounded-xl gap-3 bg-[#4B1F36] text-white"
                  >
                    <Text className="text-white font-bold text-2xl">
                      Welcome Offer
                    </Text>
                    <View className="flex flex-row justify-between">
                      <View className="">
                        <Text className="text-white max-w-[90%] leading-7">
                          Get 20% Off Your First Booking ✨ Use code: WELCOME20
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            router.push("/(artist)/(tabs)/bookings")
                          }
                          className="bg-[#E8A0BF] p-3 mt-4 rounded-md max-w-[40%]"
                        >
                          <Text className="text-sm text-center text-white font-medium">
                            Book Now
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View className="bg-[#F7FAFE] h-16 p-4 rounded-xl flex justify-center items-center">
                        <Ionicons
                          name="sparkles"
                          size={24}
                          color="#E8A0BF"
                          className="bg-[#F7FAFE] h-fit"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            )}
          </ScrollView>
        </View>
        {notificationData.map((item, index) => (
          <NotificationCard
            key={index}
            title={item.title}
            time={item.time}
            notificationType={item.notificationType as "alert" | "info"}
          />
        ))}

        <View className="mt-4">
          <EarningsCard today="$120" week="$450" month="$1,200" />
        </View>

        {/* ====== Quick Actions ===== */}
        <View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[#232429] font-bold text-base">
              Quick Actions
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-3">
            {quickActionsData.map((item: any, index: number) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() =>
                  router.push(`/(artist)/(others)/profile-details/${item.href}`)
                }
                className="bg-[#F3B3C31A] rounded-2xl h-40 pt-7 p-4 items-center flex-1 mx-2 shadow-sm"
              >
                <View className="bg-[#E8A0BF] p-4 rounded-xl mb-2 w-16 h-16 flex items-center justify-center">
                  <Feather name={item.icon} size={24} color="#FFFFFF" />
                </View>
                <Text className="text-sm text-center text-[#2E2E2E]">
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ====== NEXT UP. ===== */}
        <View className="mt-10">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[#232429] font-bold text-base">Next Up</Text>
            <TouchableOpacity
              onPress={() => router.push("/(artist)/(tabs)/profile")}
            >
              <View className="flex flex-row items-center gap-3">
                <Ionicons
                  name="sparkles"
                  size={18}
                  color="#E8A0BF"
                  className="bg-[#F7FAFE] h-fit"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-white rounded-3xl p-5 mt-3">
            <View className="flex-row items-center gap-3">
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=1" }}
                className="w-14 h-14 rounded-full"
              />
              <View className="flex-1">
                <Text className="font-semibold text-gray-800">
                  Emma Thompson
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                  Natural Radiance Glam
                </Text>
                <View className="flex-row items-center gap-4 mt-2">
                  <View className="flex-row items-center gap-1">
                    <Feather name="clock" size={14} color="#6B7280" />
                    <Text className="text-xs text-gray-500">10:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="border-t border-gray-200 mt-4 pt-4 flex-row justify-between items-center">
              <View className="flex flex-row items-center gap-4">
                <Text className="text-[#E8A0BF] font-semibold">$</Text>
                <Text className="text-[#2E2E2E] font-semibold">£80</Text>
                <Text className="text-[#6D6D6D] font-medium">. 60 mins</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/(artist)/(tabs)/bookings")}
                className="bg-[#E8A0BF] px-4 py-2 rounded-md"
              >
                <Text className="text-white text-sm font-medium">
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ====== TODAY'S BOOKING. ===== */}
        <View className="mt-10">
          <View className="flex flex-row justify-between items-center mb-4">
            <Text className="text-[#232429] font-bold text-base">
              Today's Bookings(3)
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(artist)/(tabs)/bookings")}
            >
              <View className="flex flex-row items-center gap-3">
                <Text className="text-[#E8A0BF]">See All</Text>
                <Ionicons name="chevron-forward" size={18} color="#E8A0BF" />
              </View>
            </TouchableOpacity>
          </View>
          {todayBookingsData.map((item) => (
            <BookingsCardTwo
              key={item.id}
              {...item}
              status={item.status as "Pending" | "Confirmed"}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
