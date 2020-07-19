import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import { useApi } from "../hooks/useApi";
import { AfterInteractions } from "react-native-interactions";
import { widthToDp, heightToDp } from "../utils/Size";
import Separator from "../components/Separator";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const List = styled(FlatList)`
  height: ${heightToDp("100%")}px;
  position: relative;
  padding-top: ${heightToDp("2%")}px;
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
`;

export default function CovidHospital({ data }) {
  var ITEM_HEIGHT = 90;
  return (
    <AfterInteractions>
      <Container>
        <List
          disableVirtualization
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <Listitem {...item} />}
          initialNumToRender={5}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
      </Container>
    </AfterInteractions>
  );
}
