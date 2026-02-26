import icons from "@/constants/icons";
import { GOOGLE_CONFIG } from "@/lib/lib";
import { showErrorToast } from "@/lib/toast/toast";
import { AuthContext } from "@/providers/AuthProvider";
import { useGoogleLogin } from "@/services/auth/authService";
import { GoogleLoginType } from "@/types/authType";
// import {
//   GoogleSignin,
//   isErrorWithCode,
//   isSuccessResponse,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";

// const mapGoogleUserToPayload = (user: any): GoogleLoginType => ({
//   firstName: user.givenName ?? "",
//   lastName: user.familyName ?? "",
//   email: user.email,
//   avatarImage: user.photo ?? "",
//   googleId: user.id,
//   isVerified: true,
// });

interface OAuthProps {
  title: string;
}

const OAuth = ({ title }: OAuthProps) => {
  const { mutateAsync: googleLoginUser, isPending } = useGoogleLogin();
  const auth = useContext(AuthContext)!;
  const router = useRouter();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: GOOGLE_CONFIG.iosClientId,
    androidClientId: GOOGLE_CONFIG.androidClientId,
    webClientId: GOOGLE_CONFIG.webClientId,
  });

  useEffect(() => {
    const login = async () => {
      if (response?.type !== "success") return;

      try {
        const idToken = response.authentication?.idToken;

        if (!idToken) {
          showErrorToast("Google authentication failed");
          return;
        }
        const user: any = jwtDecode(idToken);
        const payload: GoogleLoginType = {
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email,
          avatarImage: user.picture ?? "",
          googleId: user.sub,
          isVerified: user.email_verified ?? true,
        };

        await googleLoginUser(
          { payload },
          {
            onSuccess: async () => {
              await auth.refreshAuthState();
              router.replace("/(artist)/(tabs)/home");
            },
            onError: (error: any) =>
              showErrorToast(
                error.response?.data?.message ?? "Something went wrong",
              ),
          },
        );
      } catch (error) {
        console.error("Google Login Error:", error);
        showErrorToast("Something went wrong");
      }
    };

    login();
  }, [response]);

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  // useEffect(() => {
  //   GoogleSignin.configure(GOOGLE_CONFIG);
  // }, []);

  // const handleGoogleSignIn = async () => {
  //   try {
  //     console.log("Starting Google Sign In...");
  //     await GoogleSignin.hasPlayServices({
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     console.log("Play Services available");
  //     await GoogleSignin.signOut();
  //     await GoogleSignin.revokeAccess();
  //     const response = await GoogleSignin.signIn();
  //     console.log("Sign in response:", response);

  //     if (!isSuccessResponse(response)) {
  //       console.log("Sign in was not successful");
  //       return;
  //     }
  //     const payload = mapGoogleUserToPayload(response.data.user);
  //     await googleLoginUser(
  //       { payload },
  //       {
  //         onSuccess: () => router.push("/(artist)/(tabs)/home"),
  //         onError: (error: any) =>
  //           showErrorToast(
  //             error.response?.data?.message ?? "Something went wrong",
  //           ),
  //       },
  //     );

  //     await auth.refreshAuthState();
  //   } catch (error) {
  //     console.error("Google Sign In Error:", error);

  //     if (!isErrorWithCode(error)) {
  //       console.error("Unknown error type:", error);
  //       return;
  //     }

  //     switch (error.code) {
  //       case statusCodes.SIGN_IN_CANCELLED:
  //         showErrorToast("Sign in cancelled");
  //         break;
  //       case statusCodes.IN_PROGRESS:
  //         showErrorToast("Sign in already in progress");
  //         break;
  //       case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //         showErrorToast("Google Play Services not available");
  //         break;
  //       default:
  //         showErrorToast(`Error: ${error.code} - ${error.message}`);
  //     }
  //   }
  // };
  const handleFacebookSignIn = async () => {
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Sorry, Facebook Auth still in development",
    });
  };
  const handleAppleSignIn = async () => {
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Sorry, Apple Auth still in development",
    });
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3 max-w-[250px] w-full mx-auto">
        <View className="flex-1 h-[0.5px] bg-[#6D6D6D]" />
        <Text className="text-lg">{title}</Text>
        <View className="flex-1 h-[0.5px] bg-[#6D6D6D]" />
      </View>

      <View className="flex flex-row gap-5 mt-5 items-center justify-center">
        <Pressable onPress={handleGoogleSignIn}>
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
        <Pressable onPress={handleFacebookSignIn}>
          <Image
            source={icons.facebook}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
        <Pressable onPress={handleAppleSignIn}>
          <Image
            source={icons.apple}
            resizeMode="contain"
            className="w-7 h-7 mx-2"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default OAuth;
