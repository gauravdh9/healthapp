import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Hospitalheader } from "../utils/Svg";
import styled from "styled-components";
import { widthToDp, heightToDp } from "../utils/Size";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${heightToDp("10%")}px;
  padding: 0px ${heightToDp("2%")}px;
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
export default function Listheader({ title }) {
  const { goBack } = useNavigation();
  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => {
          goBack();
        }}
      >
        <Icon name="chevron-left" size={widthToDp("5%")} color="white" />
      </TouchableWithoutFeedback>
      <HeadView>
        <Heading>{title}</Heading>
      </HeadView>
    </Container>
  );
}
