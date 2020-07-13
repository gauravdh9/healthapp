import React from "react";
import { Button, View, Text } from "react-native";
import Hospitallist from "../screens/Hospitallist";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Modaldata({ onpress }) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "transparent",
        height: "70%",
        borderColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <View style={{ top: -20, position: "relative", width: 100 }}>
        <Button
          title="times-circle"
          size={35}
          onPress={onpress}
          //   color="white"
        />
      </View> */}
      <Hospitallist onpress={onpress} />
    </View>
  );
}
