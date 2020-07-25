import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
import SkeletonContent from "react-native-skeleton-content";
import Animated, { Easing } from "react-native-reanimated";
const InputView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;

const Tab = createMaterialTopTabNavigator();
export const Skeleton = () => {
  const { Theme } = useTheme();
  return (
    <SkeletonContent
      style={{ borderRadius: 20, backgroundColor: "red" }}
      boneColor={Theme.covidscreen.vector}
      highlightColor={Theme.highLight}
      animationType="shiver"
      animationDirection="horizontalRight"
      containerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderTopRightRadius: heightToDp("2%"),
        borderTopLeftRadius: heightToDp("2%"),
        backgroundColor: Theme.covidscreen.info,
        padding: heightToDp("2%"),
      }}
      isLoading={true}
      layout={[
        {
          key: "someId",
          width: widthToDp("88%"),
          height: heightToDp("20%"),
          margin: heightToDp("3%"),
          borderRadius: heightToDp("2%"),
        },
        {
          key: "someOtherId",
          width: widthToDp("88%"),
          height: heightToDp("20%"),
          margin: heightToDp("3%"),
          borderRadius: heightToDp("2%"),
        },
        {
          key: "Id",
          width: widthToDp("88%"),
          height: heightToDp("20%"),
          margin: heightToDp("3%"),
          borderRadius: heightToDp("2%"),
        },
      ]}
      easing={Easing.bezier(1, 1, 1, 1)}
      duration={2000}
    />
  );
};
const Tabstack = () => {
  const { Theme } = useTheme();
  const [value, setValue] = useState("");
  const { covidhospitaldata, covidhos, loading } = useApi();
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
        style={{ backgroundColor: Theme.covidscreen.vector }}
        sceneContainerStyle={{
          backgroundColor: Theme.covidscreen.info,
          marginTop: heightToDp("2%"),
          borderTopLeftRadius: heightToDp("3%"),
          borderTopRightRadius: heightToDp("3%"),
        }}
      >
        <Tab.Screen name="Beds">
          {() => (loading ? <Skeleton /> : <Total />)}
        </Tab.Screen>
        <Tab.Screen name="Ventilators">{withVentilators}</Tab.Screen>
        <Tab.Screen name="Non-Ventilators">{withoutVentilators}</Tab.Screen>
      </Tab.Navigator>
    </Screen>
  );
};
export default Tabstack;
