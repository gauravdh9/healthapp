import React, { useState, useEffect, useContext } from "react";
import Themes from "../utils/Themecopy";
import { ThemeProvider } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screenstack from "./Screenstack";
import Hos from "../screens/Hos";
import MyTabBar from "./MyTabBar";
import { useColorScheme } from "react-native";
import { StatusBar } from "react-native";
import Lab from "../screens/Lab";
import BloodStack from "./BloodStack";
import { UserContext } from "../utils/Context";
const Tab = createBottomTabNavigator();

const Main = () => {
  const { user } = useContext(UserContext);
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
        <Tab.Screen
          name="home"
          options={{ name: "Home" }}
          component={Screenstack}
        />
        <Tab.Screen name="hospital" options={{ name: "Hospitals" }}>
          {() => <Lab title="Hospitals" />}
        </Tab.Screen>
        <Tab.Screen
          name={user ? "user" : "sign-in-alt"}
          component={BloodStack}
          options={{ name: user ? user.name : "Sign In" }}
        />
        <Tab.Screen
          name="user-cog"
          component={Hos}
          options={{ name: "Settings" }}
        />
      </Tab.Navigator>
    </ThemeProvider>
  );
};

export default Main;
