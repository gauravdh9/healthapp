import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import { heightToDp, widthToDp } from "../utils/Size";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  flex: 1;
  font-size: 200px;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  text-align: center;
  font-family: MyText;
  font-size: ${heightToDp("3.5%")}px;
  padding: ${heightToDp("2%")}px;
  text-decoration: underline;
`;
export const Description = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  text-align: justify;
  font-family: MyText;
  padding: ${heightToDp("1.8%")}px ${widthToDp("5.8%")}px;
  line-height: ${heightToDp("4%")}px;
  font-size: ${heightToDp("2.2%")}px;
`;
export const Card = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.Theme.covidscreen.vector, theme.Theme.infocard.Cbackground],
}))`
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  border: ${heightToDp("0.5%")}px solid
    ${({ theme }) => theme.Theme.text.subheading};
  border-radius: ${widthToDp("10%")}px;
  margin: ${heightToDp("5%")}px;
`;
const Render = ({ Graphics, title, text, symptom }) => {
  return (
    <View style={styles.slide}>
      {symptom ? (
        <Graphics height={heightToDp("50%")} width={widthToDp("90%")} />
      ) : (
        <Image resizeMode="contain" style={styles.image} source={Graphics} />
      )}

      <Card style={{ elevation: 15 }}>
        <Heading>{title}</Heading>
        {text ? <Description>{text}</Description> : null}
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: widthToDp("100%"),
    height: heightToDp("20%"),
  },
});
const Arrow = styled(Icon).attrs(({ direction, theme }) => ({
  name: `arrow-${direction}`,
  color: theme.Theme.text.subheading,
  size: 20,
}))``;
const RenderNextButton = ({ direction, theme }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        marginRight: 10,
        marginLeft: 10,
        padding: 12,
        backgroundColor: theme,
      }}
    >
      <Arrow direction={direction} />
    </View>
  );
};

export default function Symptom({ data }) {
  const { Theme } = useTheme();
  const Ref = useRef();

  return (
    <Container>
      <AppIntroSlider
        renderNextButton={() => (
          <RenderNextButton
            direction={"right"}
            theme={Theme.covidscreen.vector}
          />
        )}
        renderDoneButton={() => (
          <RenderNextButton
            direction={"right"}
            theme={Theme.covidscreen.vector}
          />
        )}
        showPrevButton
        renderPrevButton={() => (
          <RenderNextButton
            direction={"left"}
            theme={Theme.covidscreen.vector}
          />
        )}
        data={data}
        renderItem={({ item }) => <Render {...item} />}
        ref={Ref}
        onDone={() => Ref.current.goToSlide(0)}
        dotStyle={{ backgroundColor: Theme.covidscreen.vector }}
      />
    </Container>
  );
}
