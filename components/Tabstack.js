import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CovidHospital from "../screens/CovidHospital";
import Add from "../screens/Add";
import Hos from "../screens/Hos";
import MyTabBar from "../components/MyTabBar2";
import Screen from "../utils/Screen";
import ListHeader from "./listheader";
const Tab = createMaterialTopTabNavigator();

const Tabstack = () => {
  return (
    <Screen>
      <ListHeader />
      <Tab.Navigator
        initialRouteName="Home"
        swipeEnabled={true}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Beds" component={CovidHospital} />
        <Tab.Screen name="Ventilators" component={Hos} />
        <Tab.Screen name="Non-Ventilators" component={Add} />
      </Tab.Navigator>
    </Screen>
  );
};
export default Tabstack;
