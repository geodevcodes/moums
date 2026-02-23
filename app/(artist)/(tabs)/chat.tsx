import EmptyState from "@/components/EmptyState";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Chat = () => {
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
      marginLeft: withTiming(isCentered ? -20 : 0, { duration: 300 }),
    };
  });

  return (
    <SafeAreaView className="px-5 pt-4 pb-4 bg-white h-full">
      <View className="flex flex-row items-center justify-between mb-4 h-12">
        <Animated.Text className="text-black font-bold" style={titleStyle}>
          Chat
        </Animated.Text>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <EmptyState
          imageUrl={images.trash}
          title="Check back later. Development in Progress"
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
