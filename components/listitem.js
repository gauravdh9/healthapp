import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "expo-svg-uri";


function Listitem(props) {
  return (
    <>
      <View style={styles.container}>
        <SvgUri
          width="60"
          height="60"
          style={{ flex: 1, marginLeft: 15 }}
          source={require("../assets/pin2.svg")}
          fill="#88aabd"
        />

        <View style={styles.view}>
          <Text style={styles.name}>
            {props.title.replace(/ *\([^)]*\) */g, " ")}
          </Text>
          <Text style={styles.add}>{props.number}</Text>
        </View>
        <View style={styles.arrow}>
          <SvgUri
            width="20"
            height="20"
            source={require("../assets/next.svg")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
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
  arrow: {
    borderLeftWidth: 1,
    flex: 1,
    borderColor: themes.colors.fill,
    height: "100%",
    alignItems: "center",
    backgroundColor: themes.colors.arrow,
    position: "relative",
    justifyContent: "center",
  },
});

export default Listitem;
