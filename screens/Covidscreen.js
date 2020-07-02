import React, { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  ScrollViewComponent,
} from "react-native";

import themes from "../components/themes";
import Screen from "../components/Screen";
import List from "../components/List";
import { Data } from "../components/Data";
import Virus from "../assets/virus.svg";

export default function Covidscreen() {
  const data = Data();
  return (
    <Screen>
      <View style={styles.vector}>
        <Virus width="120" height="120" />
      </View>
      <View style={styles.info}>
        <FlatList
          contentContainerStyle={{ flexGrow: 0.1 }}
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
