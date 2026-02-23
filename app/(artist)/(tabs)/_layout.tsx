import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({
  focused,
  Icon,
  title,
}: {
  focused: boolean;
  Icon: React.ReactNode;
  title: string;
}) => (
  <View
    className={`mt-8 justify-center items-center p-4 rounded-md ${
      focused && "bg-[#FFF8F9]"
    }`}
  >
    {Icon}
    <Text
      className={`${
        focused ? "text-[#E8A0BF] " : "text-[#666876] font-rubik"
      } text-xs w-full text-center my-1 pb-2`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            minHeight: 100,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Home"
                Icon={
                  <Image
                    source={focused ? icons.home : icons.home}
                    resizeMode="contain"
                    tintColor={focused ? "#E8A0BF" : "#666876"}
                    className={focused ? "size-7 mt-2" : "size-7 mt-2"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookings"
          options={{
            title: "bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Bookings"
                Icon={
                  <Image
                    source={icons.bookings}
                    resizeMode="contain"
                    tintColor={focused ? "#E8A0BF" : "#666876"}
                    className={focused ? "size-7 mt-2" : "size-7 mt-2"}
                  />
                }
              />
            ),
          }}
        />

        <Tabs.Screen
          name="calender"
          options={{
            title: "calender",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Calender"
                Icon={
                  <Image
                    source={icons.calender}
                    resizeMode="contain"
                    tintColor={focused ? "#E8A0BF" : "#666876"}
                    className={focused ? "size-7 mt-2" : "size-7 mt-2"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Chat"
                Icon={
                  <Image
                    source={icons.chat}
                    resizeMode="contain"
                    tintColor={focused ? "#E8A0BF" : "#666876"}
                    className={focused ? "size-7 mt-2" : "size-7 mt-2"}
                  />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Profile"
                Icon={
                  <Image
                    source={icons.profile}
                    resizeMode="contain"
                    tintColor={focused ? "#E8A0BF" : "#666876"}
                    className={focused ? "size-7 mt-2" : "size-7 mt-2"}
                  />
                }
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" animated backgroundColor="#E8A0BF" />
    </>
  );
};

export default TabsLayout;
