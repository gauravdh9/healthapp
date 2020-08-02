import React from "react";
import { View, Text } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { useTheme } from "styled-components";

import Icon from "react-native-vector-icons/FontAwesome5";
import { heightToDp, widthToDp } from "../utils/Size";
const ButtonComponent = ({ name, style, outerStyle, blood, children }) => {
  const { Theme } = useTheme();
  return (
    <View style={outerStyle}>
      <AwesomeButton
        backgroundColor={Theme.covidscreen.vector}
        backgroundDarker={Theme.covidscreen.vector}
        {...style}
        height={heightToDp("7%")}
      >
        <Text
          style={{
            fontFamily: "MyText",
            color: Theme.text.heading,
            marginRight: widthToDp("1%"),
            fontSize: heightToDp("2%"),
          }}
        >
          {name}
        </Text>
        {blood ? <Icon name="chevron-down" color={Theme.text.heading} /> : null}
      </AwesomeButton>
      {children}
    </View>
  );
};

export default ButtonComponent;
