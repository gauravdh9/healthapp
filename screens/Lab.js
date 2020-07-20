import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Screen from "../utils/Screen";
import { useApi } from "../hooks/useApi";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import TestingLab from "../components/TestingLab";
import Listheader from "../components/listheader";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  font-size: 200px;
`;
const FlatView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-radius: ${heightToDp("3%")}px;
`;
const Lab = () => {
  const { TestingData, lab } = useApi();
  useEffect(() => {
    TestingData();
  }, []);
  return (
    <Screen>
      <Container>
        <Listheader title="Testing Labs" />
        <FlatView>
          <FlatList
            disableVirtualization
            contentContainerStyle={{ flexGrow: 1 }}
            data={lab}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => <TestingLab {...item} />}
            initialNumToRender={3}
          />
        </FlatView>
      </Container>
    </Screen>
  );
};

export default Lab;
