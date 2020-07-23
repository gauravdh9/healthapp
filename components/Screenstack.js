import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Covidscreen from "../screens/Covidscreen";
import Tabstack from "./Tabstack";
import Lab from "../screens/Lab";
import Symptom from "../screens/Symptom";
import Preventions from "../screens/Preventions";
import { useTheme } from "styled-components";
const Stack = createStackNavigator();

const Screenstack = () => {
  const { Theme } = useTheme();
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
      screenOptions={{
        gestureEnabled: true,
        gestureVelocityImpact: 0.1,
        transitionSpec: {
          open: config,
          close: config,
        },
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="Home" component={Covidscreen} />
      <Stack.Screen name="Hospital" component={Tabstack} />
      <Stack.Screen name="Labs">{() => <Lab Test />}</Stack.Screen>
      <Stack.Screen
        name="Symptoms"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Theme.covidscreen.info,
          },
          headerTintColor: Theme.text.heading,
        }}
        component={Symptom}
      />
      <Stack.Screen
        name="Preventions"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Theme.covidscreen.info,
          },
          headerTintColor: Theme.text.heading,
        }}
        component={Preventions}
      />
    </Stack.Navigator>
  );
};

export default Screenstack;
