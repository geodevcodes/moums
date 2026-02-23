import ArtistProfileCard from "@/components/cards/ArtistProfileCard";
import { profileData } from "@/lib/data/profileData";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Profile = () => {
  const router = useRouter();
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
      marginLeft: withTiming(isCentered ? 20 : 0, { duration: 300 }),
    };
  });

  const handleLogout = async () => {};

  return (
    <SafeAreaView className="px-5 pt-4 pb-4 bg-[#FFFAFA] h-full">
      <View className="flex flex-row items-center justify-between mb-4 h-12">
        <Animated.Text className="text-black font-bold" style={titleStyle}>
          Profile
        </Animated.Text>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <ArtistProfileCard />
        {/* ====statistic card====== */}
        <View className="flex-row gap-2 mt-6">
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
          {/* ===== */}
          <View className="w-[32%] bg-white border border-[#E8E8E8] p-6  items-center justify-center py-3 rounded-xl">
            <View className="items-center gap-2">
              <View className="flex flex-row gap-3 items-center">
                <Text className="text-2xl text-[#E8A0BF] font-bold">18</Text>
              </View>
              <Text className="text-xs text-[#6D6D6D]">upcoming</Text>
            </View>
          </View>
          {/* ======= */}
          <View className="w-[32%] bg-white border border-[#E8E8E8] p-6  items-center justify-center py-3 rounded-xl">
            <View className="items-center gap-2">
              <View className="flex flex-row gap-1 items-center">
                <Text className="text-2xl text-[#E8A0BF] font-bold">4.8</Text>
                <FontAwesome name="star" size={18} color="#DE9A19" />
              </View>
              <Text className="text-xs text-[#6D6D6D]">rating</Text>
            </View>
          </View>
        </View>
        {/* Unified Rendering  */}
        {profileData.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mt-6 mb-2 gap-3">
            <Text className="text-sm text-gray-600">{section.section}</Text>
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (item.name === "Sign Out") {
                    handleLogout();
                    return;
                  }
                  router.push(`/(artist)/(others)/profile-details/${item.id}`);
                }}
                className="flex flex-row bg-white border border-[#E8E8E8] p-4 items-center justify-between py-3 rounded-xl"
              >
                <View className="flex flex-row items-center gap-3">
                  <View
                    style={{ backgroundColor: item.bg }}
                    className="p-3 rounded-full"
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
        ))}
        {/* Danger Zone */}
        <View className="mt-10 mb-2 gap-3">
          <View className="flex-row items-center my-6 w-full">
            <View className="flex-1 border-t border-dashed border-gray-300" />
            <View className="flex-row items-center mx-3">
              <Text className="text-orange-500 text-lg mr-1">⚠️</Text>
              <Text className="text-gray-600 font-medium">Danger Zone</Text>
            </View>
            <View className="flex-1 border-t border-dashed border-gray-300" />
          </View>

          <TouchableOpacity className="flex flex-row items-center justify-between py-3 rounded-xl">
            <View className="flex flex-row items-center gap-3">
              <View className="p-3 rounded-full bg-[#D92D20]">
                <FontAwesome name="trash-o" size={20} color="#FFFFFF" />
              </View>
              <View className="gap-1">
                <Text className="text-base font-medium text-gray-600">
                  Delete Account
                </Text>
                <Text className="text-xs text-gray-600">
                  We don't love to see you leave our platform
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
