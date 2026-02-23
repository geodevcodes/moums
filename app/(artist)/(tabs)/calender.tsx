import { Feather, Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const startOfWeek = selectedDate.startOf("week");

  const days = Array.from({ length: 7 }).map((_, i) =>
    startOfWeek.add(i, "day"),
  );
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const titleStyle = useAnimatedStyle(() => {
    const isCentered = scrollY.value > 10;
    return {
      transform: [
        {
          translateX: withTiming(isCentered ? width / 2 - 80 : 0, {
            duration: 300,
          }),
        },
      ],
      opacity: withTiming(isCentered ? 0.85 : 1, { duration: 300 }),
      fontSize: withTiming(isCentered ? 20 : 20, { duration: 300 }),
      marginLeft: withTiming(isCentered ? -20 : 0, { duration: 300 }),
    };
  });

  return (
    <SafeAreaView className="px-5 pt-4 pb-4 bg-[#FFFAFA] h-full">
      <View className="flex flex-row items-center justify-between mb-4 h-12">
        <Animated.Text className="text-black font-bold" style={titleStyle}>
          Calender
        </Animated.Text>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="bg-white rounded-2xl p-4 flex-row justify-between items-center">
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={18} color="black" />
          </TouchableOpacity>

          <FlatList
            data={days}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const isSelected = item.isSame(selectedDate, "day");

              return (
                <TouchableOpacity
                  onPress={() => setSelectedDate(item)}
                  className={`mx-1 items-center ${
                    isSelected ? "bg-[#E8A0BF] rounded-lg p-3" : "p-3"
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      isSelected ? "text-white" : "text-[#667085]"
                    }`}
                  >
                    {item.format("D")}
                  </Text>
                  <Text className="text-xs text-[#667085]">
                    {item.format("ddd")}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <TouchableOpacity>
            <Ionicons name="chevron-forward-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Text className="text-xl font-semibold text-[#232429]">
            Monday 2 February
          </Text>
          <Text className="text-sm font-medium text-[#667085] mb-4">
            0 bookings
          </Text>
        </View>
        <View className="flex flex-col items-center bg-[#FFFFFF] rounded-3xl shadow-xs p-12 mt-12">
          <View className="text-xl w-16 h-16 flex justify-center items-center font-semibold bg-[#E8A0BF1A] rounded-full mb-4">
            <Feather name="clock" size={32} color="#E8A0BF" />
          </View>
          <Text className="text-sm font-medium text-[#667085]">
            No bookings for this day
          </Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Calender;
