import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import { useApi } from "../hooks/useApi";
import { AfterInteractions } from "react-native-interactions";
import { widthToDp } from "../utils/Size";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const List = styled(FlatList)`
  height: 100%;
  position: relative;
  padding-top: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
`;
const Category = styled.View`
  height: 10%;
  top: 2%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
`;
const Heading = styled.Text`
  font-family: MyText;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
export default function CovidHospital() {
  const { covidhos, covidhospitaldata } = useApi();
  useEffect(() => {
    covidhospitaldata();
  }, []);
  var ITEM_HEIGHT = 90;
  return (
    <AfterInteractions>
      <Container>
        <List
          disableVirtualization
          data={covidhos}
          keyExtractor={(item) => item.title.toString()}
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
