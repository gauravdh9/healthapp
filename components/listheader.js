import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";
import { widthToDp, heightToDp } from "../utils/Size";
import Icon from "react-native-vector-icons/FontAwesome5";

const Container = styled.View`
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
export default function Listheader({ title, onPress, style, iconStyle }) {
  return (
    <Container style={style}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon
          name="chevron-left"
          size={heightToDp("2.8%")}
          style={{
            backgroundColor: "#12121d",
            padding: 11,
            borderRadius: widthToDp("50%"),
            height: widthToDp("11%"),
            width: widthToDp("11%"),
            ...iconStyle,
          }}
          color="white"
        />
      </TouchableWithoutFeedback>
      <HeadView>
        <Heading>{title}</Heading>
      </HeadView>
    </Container>
  );
}
