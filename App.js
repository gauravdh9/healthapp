import React, { useState } from "react";
import Covidscreen from "./screens/Covidscreen";
import Hospitallist from "./screens/Hospitallist";

import Themes from "./components/Themecopy";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.dark);
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      {/* <Covidscreen /> */}
      <Hospitallist />
    </ThemeProvider>
  );
}
