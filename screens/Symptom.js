import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import Screen from "../utils/Screen";
import { heightToDp, widthToDp } from "../utils/Size";
import AppIntroSlider from "react-native-app-intro-slider";
import { SymptomData } from "../components/SymptomData";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
const Container = styled(Screen)`
  background-color: ${({ theme }) => theme.Theme.covidscreen.info};
  flex: 1;
  font-size: 200px;
`;

const Heading = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  text-align: center;
  font-family: MyText;
  font-size: ${heightToDp("3.5%")}px;
  padding: ${heightToDp("2%")}px;
  text-decoration: underline;
`;
const Description = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  text-align: justify;
  font-family: MyText;
  padding: ${heightToDp("2%")}px ${widthToDp("6%")}px;
  line-height: ${heightToDp("4%")}px;
  font-size: ${heightToDp("2.2%")}px;
`;
const Card = styled.View`
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  border: ${heightToDp("0.5%")}px solid
    ${({ theme }) => theme.Theme.text.subheading};
  border-radius: ${heightToDp("5%")}px;
  margin: ${heightToDp("5%")}px;
`;
const Render = ({ Image, title, text }) => {
  return (
    <View style={styles.slide}>
      <Image height={heightToDp("25%")} width={widthToDp("90%")} />
      <Card style={{ elevation: 15 }}>
        <Heading>{title}</Heading>
        <Description>{text}</Description>
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

export default function Symptom() {
  const { Theme } = useTheme();
  const Ref = useRef();
  const slides = SymptomData();

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
        data={slides}
        renderItem={({ item }) => <Render {...item} />}
        ref={Ref}
        onDone={() => Ref.current.goToSlide(0)}
        dotStyle={{ backgroundColor: Theme.covidscreen.vector }}
      />
    </Container>
  );
}
