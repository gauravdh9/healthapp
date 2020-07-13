import React, { useState } from "react";
// import NavigationScreens from "./components/NavigationScreens";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Themes from "./components/Themecopy";
import { ThemeProvider } from "styled-components";
import { enableScreens } from "react-native-screens";
import Covidscreen from "./screens/Covidscreen";
import Hospitallist from "./screens/Hospitallist";
import Hospital from "./screens/Hospital";
import Add from "./screens/Add";
import Hos from "./screens/Hos";
import Screenstack from "./components/Screenstack";
import MyTabBar from "./components/MyTabBar";
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.dark);
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name="home" component={Covidscreen} />
          <Tab.Screen name="hospital-o" component={Hospitallist} />
          <Tab.Screen name="plus-circle" component={Add} />
          <Tab.Screen name="heartbeat" component={Hospital} />
          <Tab.Screen name="cogs" component={Hos} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
