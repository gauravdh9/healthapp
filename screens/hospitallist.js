import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Screen from "../components/Screen";
import Listitem from "../components/listitem";
import themes from "../components/themes";
import Listheader from "../components/listheader";
export default function Hospitallist() {
  const [data, setdata] = useState([]);
  const fetchdata = () => {
    fetch("https://d71eeab23322.ngrok.io/hospitaldata")
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
    backgroundColor: themes.colors.main,
  },
});
