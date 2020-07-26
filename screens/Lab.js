import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Screen from "../utils/Screen";
import { useApi } from "../hooks/useApi";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import TestingLab from "../components/TestingLab";
import { Skeleton } from "../components/Tabstack";
import Input from "../components/Input";
import { change } from "./CovidHospital";
import { Address } from "../utils/Svg";

const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const FlatView = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-right-radius: ${heightToDp("3%")}px;
  border-top-left-radius: ${heightToDp("3%")}px;
`;

const Lab = ({ Test, title }) => {
  const [value, setValue] = useState("");
  const { TestingData, lab, hospitaldata, hospital, loading } = useApi();
  useEffect(() => {
    !Test ? hospitaldata() : TestingData();
  }, []);
  return (
    <Screen>
      {title ? (
        <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
          <Input
            value={value}
            onChange={(params) => setValue(params)}
            width={widthToDp("80%")}
          />
          <View style={{ justifyContent: "center", borderRadius: 20 }}>
            <TouchableOpacity onPress={}>
              <Location height="40" width="40" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <Skeleton />
      ) : (
        <Container>
          <FlatView>
            <FlatList
              disableVirtualization
              contentContainerStyle={{ flexGrow: 1 }}
              data={!Test ? change(hospital, value) : lab}
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
