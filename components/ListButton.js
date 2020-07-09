import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.Theme.text.subheading};
  font-weight: bold;
`;
const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 40%;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  margin: 10px 20px;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  border-radius: 10px;
`;
const SvgView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  height: 100%;
  justify-content: center;
`;

export default function ListButton({ Location, title, color }) {
  const Locat = styled(Location).attrs(({ theme }) => ({
    fill: color,
    height: 25,
    width: 25,
  }))`
    margin: 0px 10px;
  `;

  return (
    <Container style={{ elevation: 3 }}>
      <SvgView>
        <Locat />
      </SvgView>
      <Title style={{ marginLeft: 20 }}>{title}</Title>
    </Container>
  );
}
