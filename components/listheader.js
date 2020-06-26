import React from "react";
import { StyleSheet, Image, View } from "react-native";
import themes from "../components/themes";
export default function Listheader({ img }) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={img} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "relative",
    top: 60,
    height: 160,
    width: 160,
  },
  view: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    marginBottom: 80,
  },
});
