import React, { useState, useContext } from "react";
import ToggleButton from "react-native-toggle-element";

import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { Themecontext } from "./themecontext";
import Theme from "./themes";

export default function Toggle() {
  const [swit, setSwit] = useState(false);
  const { setThemep } = useContext(Themecontext);

  return (
    <ToggleButton
      value={swit}
      onToggle={(newState) => {
        setSwit(newState);
        swit ? setThemep(Theme.color.light) : setThemep(Theme.color.dark);
      }}
      thumbActiveComponent={<Sun width="16" height="16" />}
      thumbInActiveComponent={<Moon width="15.5" height="15.5" />}
      thumbButton={{
        height: 25,
        width: 25,
      }}
      trackBar={{
        activeBackgroundColor: "#9ee3fb",
        inActiveBackgroundColor: "#3c4145",
        borderActiveColor: "#86c3d7",
        borderInActiveColor: "#1c1c1c",
        borderWidth: 5,
        width: 50,
        height: 25,
        radius: 50,
      }}
    />
  );
}
