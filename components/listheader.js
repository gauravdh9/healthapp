import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Hospitalheader } from "./Svg";
// import themes from "../components/themes";

export default function Listheader() {
  return (
    <View style={styles.view}>
      <Hospitalheader fill="white" width={150} height={150} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#313250",
    alignItems: "center",
    height: "25%",
  },
});
