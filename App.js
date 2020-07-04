import React, { useState } from "react";
import { ThemeContext } from "./components/Themecontext";
import Covidscreen from "./screens/Covidscreen";
import Themes from "./components/Themecopy";
import { AppearanceProvider } from "react-native-appearance";
export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.dark);
  return (
    // <ThemeContext.Provider value={{ Theme, setTheme }}>
    <AppearanceProvider>
      <Covidscreen />
    </AppearanceProvider>
  );
}
