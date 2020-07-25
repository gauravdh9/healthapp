import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Screen from "../utils/Screen";
import { useApi } from "../hooks/useApi";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import TestingLab from "../components/TestingLab";
import { Skeleton } from "../components/Tabstack";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const FlatView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
`;
const Contain = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${heightToDp("10%")}px;
  padding: 0px ${heightToDp("2%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Heading = styled.Text`
  font-family: MyText;
  font-size: ${heightToDp("3%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
const HeadView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const Lab = ({ Test, title }) => {
  const { TestingData, lab, hospitaldata, hospital, loading } = useApi();
  useEffect(() => {
    !Test ? hospitaldata() : TestingData();
  }, []);
  return (
    <Screen>
      {title ? (
        <Contain>
          <HeadView>
            <Heading>{title}</Heading>
          </HeadView>
        </Contain>
      ) : null}
      {loading ? (
        <Skeleton />
      ) : (
        <Container>
          <FlatView>
            <FlatList
              disableVirtualization
              contentContainerStyle={{ flexGrow: 1 }}
              data={!Test ? hospital : lab}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => <TestingLab {...item} />}
              initialNumToRender={5}
            />
          </FlatView>
        </Container>
      )}
    </Screen>
  );
};

export default Lab;
