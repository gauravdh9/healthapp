import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import themes from "../components/Themecopy";
import Toggle from "../components/Toggle";

export default function Hospitallist() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [swit, setswit] = useState(false);

  const fetchdata = () => {
    fetch("https://6dff261af2c1.ngrok.io/hospitaldata")
      .then((res) => res.json())
      .then((result) => {
        setdata(result);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={{ position: "relative" }}>
        <Toggle swit={swit} setswit={setswit} />
      </View>
      <FlatList
        style={styles.list}
        disableVirtualization
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Listitem {...item} />}
        ListHeaderComponent={
          <Listheader img={require("../assets/hospitalpng.png")} />
        }
        ListHeaderComponentStyle={{ height: 100, marginBottom: 100 }}
        refreshing={loading}
        onRefresh={() => {
          fetchdata();
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.primary,
    fontSize: 200,
  },
  list: {
    flex: 1,
    position: "relative",
    backgroundColor: themes.colors.cream,
  },
  toggle: {
    position: "absolute",
    top: 50,
  },
});
