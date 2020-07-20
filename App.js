import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Themes from "./utils/Themecopy";
import { ThemeProvider } from "styled-components";
import { enableScreens } from "react-native-screens";
import Hos from "./screens/Hos";
import Lab from "./screens/Lab";
import MyTabBar from "./components/MyTabBar";
import { useFonts } from "expo-font";
import Screenstack from "./components/Screenstack";
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.dark);

  const [loaded] = useFonts({
    MyText: require("./assets/fonts/Bariol-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name="home" component={Screenstack} />
          <Tab.Screen name="cogs" component={Hos} />
          <Tab.Screen name="music" component={Lab} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
