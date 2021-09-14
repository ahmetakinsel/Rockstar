import React from "react";
import { StyleSheet } from "react-native";
import i18n from "./i18n";
import { LanguageContext } from "./context/LanguageContext";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import Language from "./Screens/Language";
import Tabs from "./navigation/Tabs";
import EventDetails from "./Screens/EventDetails";
import Events from "./Screens/Events";
import ProfileScreen from "./Screens/Profile";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const initI18n = i18n;

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <LanguageContext.Provider value={{ t, i18n }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="ProfileScreen" component={Tabs} />
          <Stack.Screen name="EventDetails" component={EventDetails} />
          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="Language" component={Language} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
