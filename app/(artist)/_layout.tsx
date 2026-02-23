import { Stack } from "expo-router";

export default function ArtistLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="onboarding" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
