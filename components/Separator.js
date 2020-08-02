import React, { useContext } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Phone, Address, Whatsapp } from "../utils/Svg";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";
import { UserContext } from "../utils/Context";
import { array } from "prop-types";

const Line = styled.View`
  height: 100%;
  width: ${heightToDp("0.3%")}px;
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
`;
const Separate = styled.View`
  background-color: ${({ theme }) => theme.Theme.covidscreen.vector};
  height: ${heightToDp("0.5%")}px;
`;

const Head = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  font-family: MyText;
  font-size: ${heightToDp("2%")}px;
`;

const Separator = ({ location, number, whatsapp }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Separate />
      <View>
        {user?.phone == number ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: heightToDp("4.8%"),
              backgroundColor: "gray",
              paddingTop: heightToDp("0.3%"),
              paddingBottom: heightToDp("0.3%"),
            }}
          >
            <Head>Delete This to post a new Request</Head>
          </View>
        ) : number?.length > 0 ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
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
        ) : location?.length > 0 ? (
          <TouchableOpacity
            onPress={() => Linking.openURL(`${location}`)}
            style={{
              justifyContent: "center",
              height: heightToDp("4.8%"),

              alignItems: "center",
              backgroundColor: "#deecfc",
              paddingTop: heightToDp("0.5%"),
              paddingBottom: heightToDp("0.5%"),
            }}
          >
            <Address height="30" width="30" />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: heightToDp("4.8%"),
              backgroundColor: "gray",
              paddingTop: heightToDp("0.3%"),
              paddingBottom: heightToDp("0.3%"),
            }}
          >
            <Head>No Contact Provided</Head>
          </View>
        )}
      </View>
    </>
  );
};

export default React.memo(Separator);
