import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "expo-svg-uri";

import themes from "./themes";
import Lottie from "./Lottie";

export default function List({ title, number, location }) {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.name}>{title}</Text>
        {number ? <Text style={styles.add}>{number}</Text> : <Lottie />}
        <SvgUri style={styles.svg} width="55" height="55" source={location} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
  add: {
    color: themes.colors.fill,
    fontSize: 15,
  },
  view: {
    flex: 3,
    flexDirection: "column",
    margin: 15,
  },
  container: {
    alignItems: "flex-start",
    height: 100,
    width: "40%",
    backgroundColor: themes.colors.primary,
    color: themes.colors.primary,
    margin: 20,
    borderRadius: 20,
    shadowColor: themes.colors.secondary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    overflow: "hidden",
    position: "relative",
  },
  svg: {
    position: "relative",
    left: 90,
    top: -20,
  },
});
