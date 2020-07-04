import React, { useState, useContext } from "react";
import ToggleButton from "react-native-toggle-element";

import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { ThemeContext } from "./Themecontext";
import Themes from "./Themecopy";

export default function Toggle() {
  const [swit, setSwit] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  return (
    <ToggleButton
      value={swit}
      onPress={() => {
        setSwit(!swit);
        swit ? setTheme(Themes.colors.dark) : setTheme(Themes.colors.light);
      }}
      thumbActiveComponent={<Sun width="19" height="19" />}
      thumbInActiveComponent={<Moon width="19" height="19" />}
      thumbButton={{
        height: 25,
        width: 25,
      }}
      trackBar={{
        activeBackgroundColor: "#9ee3fb",
        inActiveBackgroundColor: "#3c4145",
        borderActiveColor: "#86c3d7",
        borderInActiveColor: "white",
        borderWidth: 3,
        width: 50,
        height: 25,
        radius: 50,
      }}
    />
  );
}
