import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import styled from "styled-components";
import Screen from "../components/Screen";
import Listitem from "../components/listitem";
import Listheader from "../components/listheader";
import { useApi } from "../hooks/useApi";
import Toggle from "../components/Toggle";

const Container = styled(Screen)`
  flex: 1;
  background-color: #313250;
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

  return (
    <Container>
      <Listheader />
      <List
        disableVirtualization
        data={hospital}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <Listitem {...item} />}
      />
    </Container>
  );
}
