import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="cta-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="upload-documents"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="service-setup"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" animated backgroundColor="#ff6600" />
    </>
  );
}
