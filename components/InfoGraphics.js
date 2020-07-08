import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";

import Info from "./Info";
const Title = styled.Text`
  flex-grow: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.Theme.text.subheading};
  font-weight: bold;
`;
const Container = styled.View`
  align-items: flex-start;
  height: 170px;
  width: 40%;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  padding: 4%;
`;
export default function InfoGraphics({ title, Location, color }) {
  return (
    <Container style={styles.shadow}>
      <Title>{title}</Title>

      <Info title={title} color={color} />

      <Location style={styles.svg} width={50} height={50} />
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  svg: {
    top: 0,
    left: "75%",
  },
  shadow: {
    elevation: 10,
  },
});
