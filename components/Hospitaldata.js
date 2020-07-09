import React from "react";
import { View, Text } from "react-native";

const Hospitaldata = ({ title, number }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.name}>{title.replace(/ *\([^)]*\) */g, " ")}</Text>
      <Text style={styles.add}>{number}</Text>
    </View>
  );
};

export default Hospitaldata;
