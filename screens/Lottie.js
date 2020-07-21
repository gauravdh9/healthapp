import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import { heightToDp } from "../utils/Size";
import AppIntroSlider from "react-native-app-intro-slider";
// import { useTheme } from "styled-components";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  flex: 1;
  font-size: 200px;
`;
const Heading = styled.Text`
  font-family: MyText;
  font-size: ${heightToDp("3%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/new.gif"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/sanitizer.gif"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/distance.gif"),
    backgroundColor: "#22bcb5",
  },
  {
    key: "four",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/new2.gif"),
    backgroundColor: "#22bcb5",
  },
];

const Render = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
export default function Lottie() {
  return (
    <Container>
      <AppIntroSlider renderItem={Render} data={slides} />
    </Container>
  );
}
