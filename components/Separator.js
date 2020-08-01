import React, { useContext, useRef } from "react";
import { View, TouchableOpacity, Linking, Text, Alert } from "react-native";
import { Phone, Address, Whatsapp } from "../utils/Svg";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";
import { UserContext } from "../utils/Context";
import { useApi } from "../hooks/useApi";

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
  const { user, button } = useContext(UserContext);
  const { DeleteRequest, Requests } = useApi();
  return (
    <>
      <Separate />
      <View>
        {user?.phone == number ? (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Delete",
                `Do you want to delete the request of Blood Group ${
                  button.requestBloodGroup
                } requested on ${button.createdAt.slice(0, 10)}?`,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      DeleteRequest();
                      Requests();
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: heightToDp("4.8%"),
              backgroundColor: "tomato",
              paddingTop: heightToDp("0.3%"),
              paddingBottom: heightToDp("0.3%"),
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Head>Delete</Head>
            </View>
          </TouchableOpacity>
        ) : (
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
        )}
      </View>
    </>
  );
};

export default Separator;
