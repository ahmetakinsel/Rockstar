import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Dashboard from "../Screens/Dashboard";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",

          elevation: 0,
          backgroundColor: "#ffffff",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="contrast-sharp"
                size={25}
                style={{
                  color: focused ? "#285B9C" : "#748c94",
                  transform: [{ rotate: "90deg" }],
                }}
              ></Ionicons>
              <Text
                style={{ color: focused ? "#285B9C" : "#748c94", fontSize: 13 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
