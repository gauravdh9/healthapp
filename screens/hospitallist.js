import React, { useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import { useApi } from "../hooks/useApi";
import { AfterInteractions } from "react-native-interactions";
import Icon from "react-native-vector-icons/FontAwesome";

const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
const List = styled(FlatList)`
  height: 100%;
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
        <Icon
          name="times-circle-o"
          size={45}
          color="white"
          style={{ position: "relative", left: 40 }}
        />
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
