import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const servicesList = [
  "Bridal Makeup",
  "Birthday Glam",
  "Photoshoot Makeup",
  "Traditional Makeup",
  "Home Service",
  "Studio Session",
];

export default function ServiceSetup() {
  //   const { formData, updateData } = useArtistRegister();
  const [experience, setExperience] = useState("");
  const [price, setPrice] = useState("");
  const [bio, setBio] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleComplete = async () => {
    if (!experience || !price || selectedServices.length === 0 || !bio) {
      Alert.alert("Missing Information", "Please complete all fields.");
      return;
    }

    const finalData = {
      experience,
      startingPrice: price,
      services: selectedServices,
      bio,
    };
    // router.replace("/(artist)/(tabs)/dashboard");
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold text-gray-900">Service Setup</Text>

      <Text className="text-gray-500 mt-2">
        Tell clients about your services
      </Text>

      {/* Experience */}
      <Text className="mt-8 text-gray-700 font-medium">
        Years of Experience
      </Text>
      <TextInput
        placeholder="e.g 3"
        keyboardType="numeric"
        value={experience}
        onChangeText={setExperience}
        className="border border-gray-300 rounded-xl px-4 py-3 mt-2"
      />

      {/* Starting Price */}
      <Text className="mt-6 text-gray-700 font-medium">Starting Price (₦)</Text>
      <TextInput
        placeholder="e.g 25000"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        className="border border-gray-300 rounded-xl px-4 py-3 mt-2"
      />

      {/* Services */}
      <Text className="mt-6 text-gray-700 font-medium">Select Services</Text>

      <View className="flex-row flex-wrap mt-3">
        {servicesList.map((service) => {
          const active = selectedServices.includes(service);

          return (
            <TouchableOpacity
              key={service}
              onPress={() => toggleService(service)}
              className={`px-4 py-2 rounded-full mr-3 mb-3 border ${
                active
                  ? "bg-primary border-primary"
                  : "border-gray-300 bg-white"
              }`}
            >
              <Text
                className={`text-sm ${active ? "text-white" : "text-gray-700"}`}
              >
                {service}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Bio */}
      <Text className="mt-6 text-gray-700 font-medium">Short Bio</Text>
      <TextInput
        placeholder="Tell clients about your style and expertise..."
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={bio}
        onChangeText={setBio}
        className="border border-gray-300 rounded-xl px-4 py-4 mt-2"
      />

      <TouchableOpacity
        onPress={handleComplete}
        className="bg-primary rounded-xl py-4 mt-10 mb-10"
      >
        <Text className="text-white text-center font-semibold">
          Complete Registration
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
