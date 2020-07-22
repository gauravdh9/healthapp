import React from "react";
import { AppearanceProvider } from "react-native-appearance";
import { NavigationContainer } from "@react-navigation/native";

import { enableScreens } from "react-native-screens";

import { useFonts } from "expo-font";
import Main from "./components/Main";
enableScreens();

export default function App() {
  const [loaded] = useFonts({
    MyText: require("./assets/fonts/Bariol-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
