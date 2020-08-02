import React, { useContext } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Phone, Address, Whatsapp } from "../utils/Svg";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";
import { UserContext } from "../utils/Context";

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
  console.log(number);
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
        ) : null}
        {number.length > 0 ? (
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

export default Separator;
