import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import Separator from "../components/Separator";
const Container = styled.View`
  position: relative;
  justify-content: space-around;
  height: ${heightToDp("20%")}px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: ${heightToDp("3%")}px;
  border-radius: ${heightToDp("2%")}px;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Details = styled.View`
  flex: 2;
  flex-direction: column;
  margin: ${heightToDp("2%")}px;
`;
const Address = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
  font-size: ${heightToDp("1.8%")}px;
`;
const Total = styled.Text`
  color: #007bff;
  font-family: MyText;
  font-size: ${heightToDp("1.8%")}px;
`;
const Vacant = styled.Text`
  color: #28a745;
  font-family: MyText;
  font-size: ${heightToDp("1.8%")}px;
`;
const Occupied = styled.Text`
  color: #6c757d;
  font-family: MyText;
  font-size: ${heightToDp("1.8%")}px;
`;
const Name = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
  font-size: ${heightToDp("2.8%")}px;
`;

function Listitem({
  total,
  title,
  vacant,
  occupied,
  address,
  location,
  contact_numbers,
}) {
  return (
    <>
      <Container style={styles.container}>
        <Details>
          <Name style={styles.name}>
            {title
              .replace(/ *\([^)]*\) */g, " ")
              ?.split(",")
              .slice(0)}
          </Name>
          <Address>{address?.slice(0, 50)}...</Address>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: heightToDp("1%"),
              marginBottom: heightToDp("1%"),
            }}
          >
            <Total>Total:-{total} </Total>
            <Vacant>Vacant:-{vacant}</Vacant>
            <Occupied>Occupied:-{occupied}</Occupied>
          </View>
        </Details>
        <Separator location={location} number={contact_numbers} />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default React.memo(Listitem);
