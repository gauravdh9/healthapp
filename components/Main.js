import React, { useState, useEffect } from "react";
import Themes from "../utils/Themecopy";
import { ThemeProvider } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screenstack from "./Screenstack";
import Lottie from "../screens/Lottie";
import Hos from "../screens/Hos";
import Lab from "../screens/Lab";
import MyTabBar from "./MyTabBar";
import { useColorScheme } from "react-native-appearance";
import { StatusBar } from "react-native";
const Tab = createBottomTabNavigator();

const Main = () => {
  let colorScheme = useColorScheme();

  const [Theme, setTheme] = useState(Themes.colors[colorScheme]);
  useEffect(() => {
    setTheme(Themes.colors[colorScheme]);
  }, [colorScheme]);
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      <StatusBar
        backgroundColor={Theme.covidscreen.vector}
        barStyle={Theme.status}
      />
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="home" component={Screenstack} />
        <Tab.Screen name="cogs" component={Hos} />
        <Tab.Screen name="music" component={Lab} />
        <Tab.Screen name="linux" component={Lottie} />
      </Tab.Navigator>
    </ThemeProvider>
  );
};

export default Main;
