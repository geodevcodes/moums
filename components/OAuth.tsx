import CustomButton from "@/components/CustomButton";
import icons from "@/constants/icons";
// import { AuthContext } from "@/providers/AuthProvider";
// import { useGoogleLogin } from "@/services/auth/authService";
import { GoogleLoginType, OAuthProps } from "@/types/authType";
// import {
//   GoogleSignin,
//   isErrorWithCode,
//   isSuccessResponse,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import Toast from "react-native-toast-message";

const mapGoogleUserToPayload = (user: any): GoogleLoginType => ({
  firstName: user.givenName ?? "",
  lastName: user.familyName ?? "",
  email: user.email,
  avatarImage: user.photo ?? "",
  googleId: user.id,
  isVerified: true,
});

const OAuth = ({ title }: OAuthProps) => {
  // const { mutateAsync: googleLoginUser, isPending } = useGoogleLogin();
  // const auth = useContext(AuthContext)!;
  const router = useRouter();

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

  //     // 🔥 ADD THESE TWO LINES HERE
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
  //         onSuccess: () => router.push("/(private)/(tabs)/home"),
  //         onError: (error: any) =>
  //           showErrorToast(
  //             error.response?.data?.message ?? "Something went wrong"
  //           ),
  //       }
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

  const handleGoogleSignIn = async () => {
    // router.replace("/(auth)/signup-screen");
    Toast.show({
      type: "info",
      text1: "Hey there!",
      text2: "Please, Check back later, still in development",
    });
  };

  return (
    <View>
      <CustomButton
        // title={isPending ? "Authenticating..." : title}
        title={title}
        className="mt-5 w-full flex items-center justify-center shadow-none rounded-3xl border-[1px] border-[#94969B]"
        textStyles="text-[#414651] font-semibold"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        handlePress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
