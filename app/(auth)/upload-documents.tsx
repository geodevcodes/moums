import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function UploadDocuments() {
  const [file, setFile] = useState<any>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/jpeg", "image/png"],
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.canceled) return;

      const selectedFile = result.assets[0];

      if (selectedFile.size && selectedFile.size > MAX_FILE_SIZE) {
        Alert.alert("File Too Large", "Maximum file size is 5MB.");
        return;
      }

      setFile(selectedFile);
    } catch (error) {
      Alert.alert("Error", "Something went wrong while picking file.");
    }
  };

  const handleContinue = () => {
    if (!file) {
      Alert.alert("Upload Required", "Please upload your document.");
      return;
    }

    // updateData({
    //   document: {
    //     name: file.name,
    //     uri: file.uri,
    //     type: file.mimeType,
    //   },
    // });

    // router.push("/(artist)/onboarding/service-setup");
  };

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold text-gray-900">Upload Document</Text>

      <Text className="text-gray-500 mt-2">
        Upload a clear PDF or image of your ID (Max 5MB)
      </Text>

      <View className="mt-10">
        {file ? (
          <View className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-3">
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#6B7280"
                />
                <Text className="text-gray-800 font-medium">{file.name}</Text>
              </View>

              <TouchableOpacity onPress={pickDocument}>
                <Text className="text-primary font-semibold">Replace</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={pickDocument}
            className="border-2 border-dashed border-gray-300 rounded-2xl py-12 items-center justify-center"
          >
            <Ionicons name="cloud-upload-outline" size={40} color="#9CA3AF" />
            <Text className="text-gray-400 mt-3">Tap to upload document</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={handleContinue}
        className="bg-primary rounded-xl py-4 mt-16"
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
