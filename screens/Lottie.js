import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import AnimatedLoader from "react-native-animated-loader";

const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  flex: 1;
  font-size: 200px;
`;

function Lottie() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../assets/sanitizer.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
export default Lottie;
