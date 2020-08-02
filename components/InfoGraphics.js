import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";

import Info from "./Info";
const Title = styled.Text`
  flex-grow: 1;
  font-size: ${heightToDp("3%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
  align-self: ${({ account }) => (account ? "center" : "auto")};
`;
const Container = styled.TouchableOpacity`
  align-items: ${({ account }) => (account ? "center" : "flex-start")};
  height: ${heightToDp("22%")}px;
  width: ${({ account }) => (account ? widthToDp("25%") : widthToDp("40%"))}px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: ${heightToDp("2.5%")}px
    ${({ account }) => (account ? widthToDp("2%") + "px" : "auto")};

  border-radius: ${heightToDp("3%")}px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  padding: ${({ account }) => (account ? widthToDp("3%") : heightToDp("2%"))}px;
  border: ${heightToDp("0.5")}px solid
    ${({ theme }) => theme.Theme.covidscreen.vector};
  padding-bottom: ${({ account }) => (account ? widthToDp("3.5") : 0)}px;
`;

export default function InfoGraphics({
  title,
  Location,
  color,
  image,
  profile,
  account,
}) {
  return (
    <Container
      style={styles.shadow}
      account={account}
      onPress={profile ? () => Linking.openURL(profile) : null}
    >
      <Title account={account}>{title}</Title>

      {profile ? null : <Info title={title} color={color} />}

      {image ? (
        <Image
          source={image}
          style={{
            borderRadius: widthToDp("50%"),
            height: widthToDp("16%"),
            width: widthToDp("16%"),
            marginTop: heightToDp("3%"),
            alignSelf: "center",
            borderWidth: widthToDp("0.4%"),
            borderColor: "#c9c9c9",
          }}
        />
      ) : (
        <Location
          style={styles.svg}
          width={widthToDp("12%")}
          height={heightToDp("6%")}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  svg: {
    top: 0,
    left: widthToDp("23%"),
  },
  shadow: {
    elevation: 10,
  },
});
