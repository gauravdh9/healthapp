import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Covidscreen from "../screens/Covidscreen";
import Tabstack from "./Tabstack";
import Lab from "../screens/Lab";
import Symptom from "../screens/Symptom";
import { useTheme } from "styled-components";
import Listheader from "./listheader";
import { SymptomData } from "./SymptomData";
import { LottieData } from "./LottieData";
const Stack = createStackNavigator();

const Screenstack = () => {
  const { Theme } = useTheme();
  const symptom = SymptomData();
  const prevention = LottieData();

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
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Listheader
              title={title}
              onPress={previous ? navigation.goBack : undefined}
              style={options.headerStyle}
              iconStyle={options.iconStyle}
            />
          );
        },
      }}
      mode="modal"
    >
      <Stack.Screen name="Home" component={Covidscreen} />
      <Stack.Screen
        name="Hospital"
        component={Tabstack}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Labs"
        options={{
          headerShown: true,
        }}
      >
        {() => <Lab Test />}
      </Stack.Screen>
      <Stack.Screen
        name="Symptoms"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Theme.covidscreen.info },
          iconStyle: { backgroundColor: Theme.covidscreen.vector },
        }}
      >
        {() => <Symptom data={symptom} />}
      </Stack.Screen>
      <Stack.Screen
        name="Preventions"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Theme.covidscreen.info },
          iconStyle: { backgroundColor: Theme.covidscreen.vector },
        }}
      >
        {() => <Symptom data={prevention} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Screenstack;
