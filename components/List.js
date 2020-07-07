import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountUp } from "use-count-up";
import styled from "styled-components";
import Minigraph from "./minigraph";
// import Graph from "./Graph";
import { useApi } from "../hooks/useApi";

const Title = styled.Text`
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
`;
export default function List({ title, Location, color }) {
  const { result } = useApi();
  return (
    <Container style={styles.shadow}>
      <View style={styles.view}>
        <Title color={color}>{title}</Title>
        <Text
          style={{
            color,
            position: "relative",
            width: 100,
            marginTop: 10,
          }}
        >
          <CountUp
            isCounting
            end={result ? result[0][title] : 0}
            duration={3}
          />
        </Text>
        <Minigraph
          data={
            result
              ? result[1][title]
              : [
                  { x: 0, y: 0 },
                  { x: 0, y: 0 },
                  { x: 0, y: 0 },
                  { x: 0, y: 0 },
                  { x: 0, y: 0 },
                ]
          }
          color={color}
        />

        <Location style={styles.svg} width={55} height={55} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 3,
    flexDirection: "column",
    margin: 15,
  },
  svg: {
    position: "relative",
    left: 90,
    top: 0,
  },
  shadow: {
    elevation: 10,
  },
});
