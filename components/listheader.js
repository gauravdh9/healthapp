import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";
import { widthToDp, heightToDp } from "../utils/Size";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "styled-components";
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
  flex: ${({ icon }) => (icon ? 1 : 0.9)};
  justify-content: center;
  align-items: center;
`;
export default React.memo(function Listheader({
  title,
  onPress,
  style,
  iconStyle,
  icon,
}) {
  const { Theme } = useTheme();
  return (
    <Container style={style}>
      {icon ? null : (
        <TouchableWithoutFeedback onPress={onPress}>
          <Icon
            name="chevron-left"
            size={heightToDp("2.8%")}
            style={{
              backgroundColor: Theme.infocard.Cbackground,
              paddingLeft: widthToDp("3%"),
              paddingTop: widthToDp("2.2%"),
              borderRadius: widthToDp("50%"),
              height: widthToDp("11%"),
              width: widthToDp("11%"),
              ...iconStyle,
            }}
            color={Theme.text.heading}
          />
        </TouchableWithoutFeedback>
      )}
      <HeadView icon={icon}>
        <Heading>{title}</Heading>
      </HeadView>
    </Container>
  );
});
