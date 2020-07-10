import React, { useState } from "react";
import NavigationScreens from "./components/NavigationScreens";
import { NavigationContainer } from "@react-navigation/native";
import Themes from "./components/Themecopy";
import { ThemeProvider } from "styled-components";
import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.dark);
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </ThemeProvider>
  );
}
