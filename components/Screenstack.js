import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Covidscreen from "../screens/Covidscreen";
import Hospitallist from "../screens/Hospitallist";

const Stack = createStackNavigator();
const Screenstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
      headerMode={false}
      mode={"card"}
    >
      <Stack.Screen name="home" component={Covidscreen} />
      <Stack.Screen name="hospital" component={Hospitallist} />
    </Stack.Navigator>
  );
};

export default Screenstack;

// let list=[]
// const add=(x,y)=>{
//     list.push(x)
//     list.push(y)
//     return list
// }

// add(x,y)
