import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import themes from "../components/themes";

export default function Hospitallist() {
  const [data, setdata] = useState([]);
  const fetchdata = () => {
    fetch("https://b2cd41ee970e.ngrok.io/hospitaldata")
      .then((res) => res.json())
      .then((result) => setdata(result))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Screen style={styles.container}>
      <View></View>
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
});
