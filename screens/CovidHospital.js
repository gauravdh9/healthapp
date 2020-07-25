import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../utils/Screen";
import Listitem from "../components/listitem";
import { AfterInteractions } from "react-native-interactions";
import { widthToDp, heightToDp } from "../utils/Size";
import SkeletonContent from "react-native-skeleton-content";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { useApi } from "../hooks/useApi";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const List = styled.FlatList`
  height: ${heightToDp("100%")}px;
  /* margin-top: ${heightToDp("2%")}px; */
  padding-top: ${heightToDp("2%")}px;
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
`;

const Input = styled.TextInput`
  border: none;
  margin: 0px;
  padding: 0px;
  line-height: 10px;
`;
const SketView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  flex: 1;
`;
export default function CovidHospital({ data, value }) {
  const { Theme } = useTheme();
  var ITEM_HEIGHT = heightToDp("20%");
  const { loading } = useApi();
  // const [loading, setLoading] = useState(true);

  const change = () => {
    return data.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
  };
  return (
    <>
      <Container>
        <List
          data={change()}
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
