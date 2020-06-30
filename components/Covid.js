import React from "react";
import SvgUri from "expo-svg-uri";

export default function Covid() {
  return (
    <SvgUri
      width="150"
      height="150"
      source={require("../assets/covid19.svg")}
    />
  );
}
