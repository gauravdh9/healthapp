import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";

import Info from "./Info";
const Title = styled.Text`
  flex-grow: 1;
  font-size: ${heightToDp("3")}px;
  color: ${({ theme }) => theme.Theme.text.subheading};
  font-family: MyText;
`;
const Container = styled.View`
  align-items: flex-start;
  height: auto;
  width: ${widthToDp("40%")}px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: ${heightToDp("1.5%")}px auto;
  margin-bottom: ${heightToDp("3%")}px;
  border-radius: ${heightToDp("3%")}px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  padding: ${heightToDp("2%")}px;
  border: ${heightToDp("0.5")}px solid
    ${({ theme }) => theme.Theme.covidscreen.vector};
  padding-bottom: 0px;
`;
export default function InfoGraphics({ title, Location, color }) {
  return (
    <Container style={styles.shadow}>
      <Title>{title}</Title>

      <Info title={title} color={color} />

      <Location
        style={styles.svg}
        width={widthToDp("12%")}
        height={heightToDp("6%")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  svg: {
    top: 0,
    left: widthToDp("23%"),
  },
  shadow: {
    elevation: 10,
  },
});
