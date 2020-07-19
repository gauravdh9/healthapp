import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CovidHospital from "../screens/CovidHospital";
import MyTabBar from "../components/MyTabBar2";
import Screen from "../utils/Screen";
import ListHeader from "./listheader";
import { useApi } from "../hooks/useApi";
const Tab = createMaterialTopTabNavigator();

const Tabstack = () => {
  const { covidhospitaldata, covidhos } = useApi();
  useEffect(() => {
    covidhospitaldata();
  }, []);

  const Total = () => {
    return <CovidHospital data={covidhos.total} />;
  };
  const withVentilators = () => {
    return <CovidHospital data={covidhos.withVentilators} />;
  };
  const withoutVentilators = () => {
    return <CovidHospital data={covidhos.withoutVentilators} />;
  };

  return (
    <Screen>
      <ListHeader />
      <Tab.Navigator
        swipeEnabled={true}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Beds">{Total}</Tab.Screen>
        <Tab.Screen name="Ventilators">{withVentilators}</Tab.Screen>
        <Tab.Screen name="Non-Ventilators">{withoutVentilators}</Tab.Screen>
      </Tab.Navigator>
    </Screen>
  );
};
export default Tabstack;
