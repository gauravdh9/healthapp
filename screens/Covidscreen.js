import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Alert,
  Button,
  Modal,
} from "react-native";
import { AfterInteractions } from "react-native-interactions";
import ContentLoader from "react-native-easy-content-loader";
import Screen from "../components/Screen";
import InfoGraphics from "../components/InfoGraphics";
import ListButton from "../components/ListButton";
import { Data } from "../components/Data";
import styled from "styled-components/native";
import Virus from "../assets/virus2.svg";
import Hospitallist from "./Hospitallist";
import Modaldata from "../components/Modaldata";
const Styledview = styled.View`
  position: relative;
  height: 40%;
  flex-grow: 1;
  justify-content: flex-start;
  top: 20px;
  align-items: flex-start;
  position: relative;
  background-color: white;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Info = styled.View`
  position: relative;
  height: 60%;
  flex-grow: 1;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const HeadingText = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
const HeadingText2 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.Theme.text.heading};
`;

export default function Covidscreen({ navigation }) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <AfterInteractions
      placeholder={<ContentLoader animationDuration={5000} loading={true} />}
    >
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

            <Virus height="170" width="170" />
          </View>
        </Styledview>
        <Info>
          <View style={{ top: -60 }}>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={Data[0]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <InfoGraphics {...item} />}
              numColumns={2}
            />
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={Data[1]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <>
                  <ListButton {...item} onpress={() => setmodalVisible(true)} />
                  <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        backgroundColor: "#00000011",
                      }}
                    >
                      <Modaldata
                        onpress={() => setmodalVisible(false)}
                        style={{ justifyContent: "flex-end", margin: 0 }}
                      />
                    </View>
                  </Modal>
                </>
              )}
              numColumns={2}
            />
          </View>
        </Info>
      </Screen>
    </AfterInteractions>
  );
}
