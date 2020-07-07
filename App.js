import React, { useState } from "react";
import Covidscreen from "./screens/Covidscreen";
import Themes from "./components/Themecopy";
import { ThemeProvider } from "styled-components";

import Graph from "./components/Graph";
export default function App() {
  const [Theme, setTheme] = useState(Themes.colors.light);
  return (
    <ThemeProvider theme={{ Theme, setTheme }}>
      <Covidscreen />
    </ThemeProvider>
  );
}
