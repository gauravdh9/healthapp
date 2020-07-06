import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Graph from "../components/Graph";

import Screen from "../components/Screen";
import List from "../components/List";
import { Data } from "../components/Data copy";
import Virus from "../assets/virus.svg";
import Toggle from "../components/Toggle";
import styled from "styled-components/native";

const Styledview = styled.View`
  height: 30%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: white;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Info = styled.View`
  height: 80%;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-radius: 25px;
  top: -25px;
`;

export default function Covidscreen() {
  const data = Data();
  return (
    <Screen>
      <Styledview>
        <View style={{ position: "relative", margin: 20, right: 160 }}>
          <Toggle />
        </View>
        <Virus width="120" height="120" />
      </Styledview>
      <Info>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <List {...item} />}
          numColumns={2}
          getItemLayout={(data, index) => ({
            length: 170,
            offset: 170 * index,
            index,
          })}
        />
        {/* <Graph /> */}
      </Info>
    </Screen>
  );
}
