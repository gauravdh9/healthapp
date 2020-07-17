import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Hospitalheader } from "../utils/Svg";
import styled from "styled-components";
import { widthToDp, heightToDp } from "../utils/Size";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${heightToDp("12%")}px;
  padding: 0px ${heightToDp("2%")}px;
`;
const Heading = styled.Text`
  font-family: MyText;
  font-size: ${heightToDp("3%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
const IconView = styled.TouchableWithoutFeedback`
  flex-direction: row;
  justify-content: center;
  background-color: red;
`;
const Home = styled.Text`
  font-family: MyText;
  font-size: ${heightToDp("2%")}px;
  margin-left: ${heightToDp("0.5%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
`;
export default function Listheader() {
  const { navigate, goBack } = useNavigation();
  return (
    <Container>
      <IconView
        onPress={() => {
          goBack();
        }}
      >
        <Icon name="chevron-left" size={widthToDp("5%")} color="white" />
      </IconView>
      <Heading>Covid Hospitals</Heading>
    </Container>
  );
}
