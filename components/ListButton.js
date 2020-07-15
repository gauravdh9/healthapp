import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";

const Title = styled.Text`
  font-size: ${heightToDp("2.6%")}px;
  color: ${({ theme }) => theme.Theme.text.subheading};

  font-family: MyText;
`;
const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: flex-start;
  height: ${heightToDp("6.5%")}px;
  width: ${widthToDp("40%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  margin: ${heightToDp("1.3%")}px auto;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  border-radius: ${heightToDp("1.5%")}px;
  border: ${heightToDp("0.5%")}px solid
    ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const SvgView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  height: 100%;
  justify-content: center;
  border-radius: ${heightToDp("1.5%")}px;
`;

export default function ListButton({ Location, title, color, onpress }) {
  const Locat = styled(Location).attrs(({ theme }) => ({
    fill: color,
    height: heightToDp("6%"),
    width: widthToDp("6%"),
  }))`
    margin: 0px 10px;
  `;

  return (
    <Container onPress={onpress} style={{ elevation: 3 }}>
      <SvgView>
        <Locat />
      </SvgView>
      <Title style={{ marginLeft: widthToDp("3%") }}>{title}</Title>
    </Container>
  );
}
