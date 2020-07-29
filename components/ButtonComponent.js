import React from "react";
import { View, Text } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { useTheme } from "styled-components";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { heightToDp, widthToDp } from "../utils/Size";
const ButtonComponent = ({ name, style, outerStyle, blood }) => {
  const { Theme } = useTheme();
  return (
    <View style={outerStyle}>
      <AwesomeButton
        backgroundColor={Theme.infocard.Cbackground}
        backgroundDarker={Theme.covidscreen.vector}
        {...style}
      >
        <Text
          style={{
            fontFamily: "MyText",
            color: Theme.text.heading,
            marginRight: widthToDp("1%"),
          }}
        >
          {name}
        </Text>
        {blood ? <Icon name="chevron-down" color={Theme.text.heading} /> : null}
      </AwesomeButton>
    </View>
  );
};

export default ButtonComponent;
