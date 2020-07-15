import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import styled from "styled-components";

const Safe = styled.SafeAreaView`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  background: ${({ theme }) => theme.Theme.covidscreen.vector};
`;

function Screen({ children, style }) {
  return (
    <>
      <Safe style={style}>
        <View style={style}>{children}</View>
      </Safe>
    </>
  );
}

export default Screen;
