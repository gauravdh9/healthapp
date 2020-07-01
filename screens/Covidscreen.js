import React, { useEffect } from "react";
import SvgUri from "expo-svg-uri";

import { StyleSheet, Text, View, FlatList } from "react-native";
import themes from "../components/themes";
import Screen from "../components/Screen";
import List from "../components/List";
import { Data } from "../components/Data";

export default function Covidscreen() {
  const data = Data();
  return (
    <Screen>
      <View style={styles.vector}>
        <SvgUri
          width="120"
          height="120"
          source={require("../assets/virus.svg")}
        />
      </View>
      <View style={styles.info}>
        <FlatList
          disableVirtualization
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <List {...item} />}
          numColumns={2}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  vector: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.accent,
    position: "relative",
  },
  info: {
    height: "80%",
    backgroundColor: themes.colors.cream,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: -25,
  },
});
