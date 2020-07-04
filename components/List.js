import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountUp } from "use-count-up";
import styled from "styled-components";
import themes from "./themes";
import Themes from "./Themecopy";
import Minigraph from "./minigraph";

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
export default function List({ title, number, Location, color }) {
  return (
    <Container style={styles.shadow}>
      <View style={styles.view}>
        <Title color={color}>{title}</Title>
        <Text style={{ color, position: "relative", top: 10 }}>
          <CountUp isCounting end={number} duration={2} />
        </Text>
        <Minigraph type={title} color={color} />
        <Location style={styles.svg} width={55} height={55} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  add: {
    color: themes.colors.fill,
    fontSize: 15,
  },
  view: {
    flex: 3,
    flexDirection: "column",
    margin: 15,
  },
  svg: {
    position: "relative",
    left: 90,
    top: -15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 10,
  },
});
