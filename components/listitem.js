import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from "./themes";
export default function Listitem({ title, address, number }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{address}</Text>
      <Text>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: Theme.colors.background,
    padding: 15,
    margin: 15,
    borderRadius: 20,
  },
});
