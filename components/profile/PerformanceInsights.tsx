import EmptyState from "@/components/EmptyState";
import images from "@/constants/images";
import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

const PerformaceInsights = () => {
  const onSavePress = async () => {};

  return (
    <View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 32 }}
      >
        <View className="mt-4">
          <EmptyState
            imageUrl={images.trash}
            title="No Performance Insight. Check back later."
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default PerformaceInsights;
