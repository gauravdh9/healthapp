import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import styled from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import Separator from "../components/Separator";
import { useApi } from "../hooks/useApi";
const Container = styled.View`
  position: relative;
  justify-content: center;
  height: ${heightToDp("20%")}px;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  margin: ${heightToDp("3.5%")}px;
  margin-top: ${heightToDp("5.5%")}px;
  margin-bottom: ${heightToDp("0.5%")}px;
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
const Type = styled.Text`
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
  address,
  location,
  number,
  title,
  type,
  dis,
  whatsapp,
  date,
}) {
  return (
    <>
      <Container style={styles.container}>
        <Details>
          <Name style={styles.name}>{title?.slice(0, 30)}</Name>

          <Address>{address?.slice(0, 50)}</Address>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: heightToDp("1%"),
              marginBottom: heightToDp("1%"),
            }}
          >
            <Type>Type&nbsp;:-{type}</Type>
            {dis ? <Type>{dis.toFixed(2)}KM</Type> : null}
            {date ? <Type>{date.slice(0, 10)}</Type> : null}
          </View>
        </Details>
        <Separator location={location} number={number} whatsapp={whatsapp} />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 16,
  },
});

export default React.memo(Listitem);
