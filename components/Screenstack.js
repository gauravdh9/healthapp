import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import Covidscreen from "../screens/Covidscreen";
import Tabstack from "./Tabstack";
import Lab from "../screens/Lab";
const Stack = createStackNavigator();

const Screenstack = () => {
  const config = {
    animation: "spring",
    config: {
      stiffness: 2500,
      damping: 500,
      mass: 1,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      initialRouteName="home"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureVelocityImpact: 0.1,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
      mode="modal"
    >
      <Stack.Screen name="home" component={Covidscreen} />
      <Stack.Screen name="hospital" component={Tabstack} />
      <Stack.Screen name="labs" component={Lab} />
    </Stack.Navigator>
  );
};

export default Screenstack;
