import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Phone, Address, Whatsapp } from "../utils/Svg";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";

const Line = styled.View`
  height: 100%;
  width: ${heightToDp("0.3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Separate = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  height: ${heightToDp("0.5%")}px;
`;
const Separator = ({ location, number, whatsapp }) => {
  return (
    <>
      <Separate />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${number}`)}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#bbf1c8",
              paddingTop: heightToDp("0.3%"),
              paddingBottom: heightToDp("0.3%"),
            }}
          >
            <Phone height="30" width="30" />
          </TouchableOpacity>

          <Line />
          <TouchableOpacity
            onPress={() => Linking.openURL(`${location}`)}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#deecfc",
              paddingTop: heightToDp("0.5%"),
              paddingBottom: heightToDp("0.5%"),
            }}
          >
            {whatsapp ? (
              <Whatsapp height="30" width="30" />
            ) : (
              <Address height="30" width="30" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Separator;
