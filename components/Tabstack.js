import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CovidHospital from "../screens/CovidHospital";
import MyTabBar from "../components/MyTabBar2";
import Screen from "../utils/Screen";
import { useApi } from "../hooks/useApi";
import MaterialsIcon from "react-native-vector-icons/FontAwesome";
import { Kohana } from "react-native-textinput-effects";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
const InputView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;

const Tab = createMaterialTopTabNavigator();

const Tabstack = () => {
  const { Theme } = useTheme();
  const [value, setValue] = useState("");
  const { covidhospitaldata, covidhos } = useApi();
  useEffect(() => {
    covidhospitaldata();
  }, []);

  const Total = () => {
    return <CovidHospital data={covidhos.total} value={value} />;
  };
  const withVentilators = () => {
    return <CovidHospital data={covidhos.withVentilators} value={value} />;
  };
  const withoutVentilators = () => {
    return <CovidHospital data={covidhos.withoutVentilators} value={value} />;
  };

  return (
    <Screen>
      <InputView>
        <Kohana
          value={value}
          style={{
            margin: heightToDp("2%"),
            borderRadius: heightToDp("2%"),
          }}
          iconClass={MaterialsIcon}
          iconName={"hospital-o"}
          iconColor={Theme.tabBar.inactive}
          inputPadding={5}
          inputStyle={Theme.tabBar.inactive}
          iconContainerStyle={{ padding: 10 }}
          useNativeDriver
          onChangeText={(param) => setValue(param)}
          placeholder="Search..."
        />
      </InputView>
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
