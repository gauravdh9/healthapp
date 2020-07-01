import React from "react";
import LottieView from "lottie-react-native";

export default function Lottie() {
  return <LottieView source={require("../assets/loader.json")} autoPlay loop />;
}
