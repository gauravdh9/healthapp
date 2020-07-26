import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import MaterialsIcon from "react-native-vector-icons/FontAwesome";
import { Kohana } from "react-native-textinput-effects";
import { heightToDp, widthToDp } from "../utils/Size";
import { useTheme } from "styled-components";

const InputView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;

const Input = ({ value, onChange, width }) => {
  const { Theme } = useTheme();
  return (
    <InputView style={{ width }}>
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
        onChangeText={onChange}
        placeholder="Search..."
      />
    </InputView>
  );
};

export default Input;
