import React from "react";
import { View, FlatList, Text } from "react-native";

import Screen from "../components/Screen";
import InfoGraphics from "../components/InfoGraphics";
import ListButton from "../components/ListButton";
import { Data } from "../components/Data";
import Toggle from "../components/Toggle";
import styled from "styled-components/native";
import Virus from "../assets/virus2.svg";

const Styledview = styled.View`
  position: relative;
  height: 35%;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: white;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Info = styled.View`
  position: relative;
  height: 65%;
  flex-grow: 1;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const HeadingText = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
const HeadingText2 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
export default function Covidscreen() {
  return (
    <Screen>
      <Styledview>
        <View style={{ position: "relative", margin: 20 }}>
          <Toggle />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <View>
            <HeadingText>Stay Home</HeadingText>
            <HeadingText2>Stay Safe</HeadingText2>
          </View>

          <Virus height="150" width="150" />
        </View>
      </Styledview>
      <Info>
        <View style={{ top: -75 }}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={Data[0]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <InfoGraphics {...item} />}
            numColumns={2}
          />
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={Data[1]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListButton {...item} />}
            numColumns={2}
          />
        </View>
      </Info>
    </Screen>
  );
}
