import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import styled from "styled-components";
import Screen from "../components/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import { useApi } from "../hooks/useApi";
import { AfterInteractions } from "react-native-interactions";

const Container = styled(Screen)`
  flex: 1;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const List = styled(FlatList)`
  flex: 1;
  position: relative;
  padding-top: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
`;

export default function Hospitallist() {
  const { hospital, hospitaldata } = useApi();
  useEffect(() => {
    hospitaldata();
  }, []);
  var ITEM_HEIGHT = 90;
  return (
    <AfterInteractions>
      <Container>
        <Listheader />
        <List
          disableVirtualization
          data={hospital}
          keyExtractor={(item) => item._id.toString()}
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
