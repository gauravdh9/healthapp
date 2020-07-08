import React from "react";
import { StyleSheet } from "react-native";
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
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: 10px 20px;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  border-radius: 10px;
  padding: 1%;
`;

export default function ListButton({ Location, title }) {
  const Locat = styled(Location).attrs(({ theme }) => ({
    fill: theme.Theme.text.heading,
    height: 25,
    width: 25,
  }))`
    margin: 0px 10px;
  `;
  return (
    <Container style={{ elevation: 3 }}>
      <Locat />
      <Title>{title}</Title>
    </Container>
  );
}
