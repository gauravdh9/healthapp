import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../utils/Screen";
import Listitem from "../components/listitem";
import { widthToDp, heightToDp } from "../utils/Size";
import { View } from "react-native";
import { useTheme } from "styled-components";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const List = styled.FlatList`
  height: ${heightToDp("100%")}px;
  padding-top: ${heightToDp("2%")}px;
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
`;

export const change = (data, value) => {
  return data.filter((item) => {
    const itemData = item.title.toUpperCase();
    const textData = value.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
};
export default function CovidHospital({ data, value }) {
  const { Theme } = useTheme();
  var ITEM_HEIGHT = heightToDp("20%");

  return (
    <>
      <Container>
        <List
          data={change(data, value)}
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
    </>
  );
}
