import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hospitals, Next } from "./Svg";
import styled from "styled-components";

const Arrow = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  position: relative;
  justify-content: center;
`;
const Container = styled.View`
  position: relative;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 90px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  color: blue;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
`;
const Details = styled.View`
  flex: 3;
  flex-direction: column;
  margin: 15px;
`;
const Address = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  font-weight: 400;
  font-size: 15px;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.Theme.text.subheading};
  font-weight: bold;
  font-size: 20px;
`;
const Nex = styled(Next).attrs(({ theme }) => ({
  fill: theme.Theme.text.heading,
}))``;

const Pinto = styled(Hospitals).attrs(({ theme }) => ({
  fill: theme.Theme.text.heading,
  width: 60,
  height: 60,
}))`
  flex: 1;
  margin-left: 15px;
`;

function Listitem({ number, title }) {
  return (
    <>
      <Container style={styles.container}>
        <Pinto />
        <Details>
          <Name style={styles.name}>
            {title.replace(/ *\([^)]*\) */g, " ")}
          </Name>
          <Address style={styles.add}>{number}</Address>
        </Details>
        <Arrow>
          <Nex width="20" height="20" />
        </Arrow>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default Listitem;
