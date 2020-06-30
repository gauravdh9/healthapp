import React from "react";
import ToggleButton from "react-native-toggle-element";
import SvgUri from "expo-svg-uri";

export default function Toggle(props) {
  return (
    <ToggleButton
      value={props.swit}
      onToggle={(newState) => props.setswit(newState)}
      thumbActiveComponent={
        <SvgUri width="16" height="16" source={require("../assets/sun.svg")} />
      }
      thumbInActiveComponent={
        <SvgUri
          width="15.5"
          height="15.5"
          source={require("../assets/moon.svg")}
        />
      }
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
