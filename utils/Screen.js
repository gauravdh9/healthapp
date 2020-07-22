import React from "react";
import Constants from "expo-constants";
import styled from "styled-components";

const Safe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const VIEW = styled.View`
  flex: 1;
`;
function Screen({ children, style }) {
  return (
    <>
      <Safe style={style}>
        <VIEW style={style}>{children}</VIEW>
      </Safe>
    </>
  );
}

export default Screen;
