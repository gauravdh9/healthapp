import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountUp } from "use-count-up";
import styled from "styled-components";
import Minigraph from "./minigraph";
// import Graph from "./Graph";
import { useApi } from "../hooks/useApi";

const Title = styled.Text`
  flex-grow: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.Theme.infocard.text};
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
export default function List({ title, Location, color }) {
  const { result } = useApi();
  return (
    <Container style={styles.shadow}>
      <Title>{title}</Title>

      <Text
        style={{
          position: "relative",

          color: color,
          marginTop: 10,
        }}
      >
        <CountUp isCounting end={result ? result[0][title] : 0} duration={3} />
      </Text>
      <Minigraph
        data={result ? result[1][title] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        color={color}
      />

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
