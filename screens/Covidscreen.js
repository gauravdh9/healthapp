import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { AfterInteractions } from "react-native-interactions";
import Screen from "../utils/Screen";
import InfoGraphics from "../components/InfoGraphics";
import ListButton from "../components/ListButton";
import { Data } from "../utils/Data";
import styled from "styled-components/native";
import Virus from "../assets/virus2.svg";
import { heightToDp } from "../utils/Size";
const Styledview = styled.View`
  position: relative;
  height: ${heightToDp("31.6%")}px;
  flex-grow: 1;
  justify-content: flex-start;
  top: ${heightToDp("1%")}px;
  align-items: flex-start;
  position: relative;
  background-color: white;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Info = styled.View`
  position: relative;
  flex-grow: 1;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-left-radius: ${heightToDp("3%")}px;
  border-top-right-radius: ${heightToDp("3%")}px;
`;
const HeadingText = styled.Text`
  font-size: ${heightToDp("6")}px;

  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
`;
const HeadingText2 = styled.Text`
  font-size: ${heightToDp("4")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
`;

export default function Covidscreen({ navigation }) {
  return (
    <AfterInteractions>
      <Screen>
        <Styledview>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <View>
              <HeadingText>Stay Home</HeadingText>
              <HeadingText2>Stay Safe</HeadingText2>
            </View>

            <Virus height={heightToDp("19")} width={heightToDp("19")} />
          </View>
        </Styledview>
        <Info>
          <View style={{ top: heightToDp("-4%") }}>
            <FlatList
              style={{ top: heightToDp("-8%") }}
              contentContainerStyle={{ flexGrow: 1 }}
              data={Data[0]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <InfoGraphics {...item} />}
              numColumns={2}
            />
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              style={{ top: heightToDp("-8%") }}
              data={Data[1]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListButton
                  {...item}
                  onpress={() => navigation.navigate("hospital")}
                />
              )}
              numColumns={2}
            />
          </View>
        </Info>
      </Screen>
    </AfterInteractions>
  );
}
