import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import themes from "../components/themes";
import Screen from "../components/Screen";
import List from "../components/List";
import { Data } from "../components/Data";
import Virus from "../assets/virus.svg";
import Toggle from "../components/Toggle";
import { ThemeContext } from "../components/Themecontext";

export default function Covidscreen() {
  const { Theme } = useContext(ThemeContext);
  const data = Data();
  return (
    <Screen>
      <View style={styles.vector}>
        <View style={{ position: "relative", margin: 20, right: 160 }}>
          <Toggle />
        </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
  },
  info: {
    height: "80%",
    backgroundColor: themes.colors.cream,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: -25,
  },
});
