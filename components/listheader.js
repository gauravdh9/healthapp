import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Hospitalheader } from "../utils/Svg";

export default function Listheader() {
  return (
    <View style={styles.view}>
      <Hospitalheader width={150} height={150} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
});
