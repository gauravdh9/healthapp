import React, { useEffect, useContext, useRef } from "react";
import { View, Text } from "react-native";
import Screen from "../utils/Screen";
import Toggle from "../components/Toggle";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { heightToDp, widthToDp } from "../utils/Size";
import { UserContext } from "../App";
import { useTheme } from "styled-components";
const ClearData = async () => {
  try {
    await AsyncStorage.removeItem("@storage_Key");
  } catch (error) {}
};

const Hospital = () => {
  const { navigate } = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const { Theme } = useTheme();
  return (
    <Screen style={{ position: "relative" }}>
      <View
        style={{
          backgroundColor: Theme.covidscreen.vector,

          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <View style={{ padding: heightToDp("5%") }}>
          <Toggle />
        </View>

        <View
          style={{
            justifyContent: "space-around",
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: widthToDp("25%"),
              width: widthToDp("25%"),
              borderRadius: widthToDp("20%"),
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Theme.infocard.Cbackground,
            }}
          >
            <Text
              style={{
                fontSize: heightToDp("13%"),
                fontFamily: "MyText",
                color: Theme.text.heading,
              }}
            >
              {user ? user.name[0] : "?"}
            </Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              backgroundColor: Theme.covidscreen.info,
              borderTopRightRadius: heightToDp("3%"),
              borderTopLeftRadius: heightToDp("3%"),
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Theme.infocard.Cbackground,
                borderRadius: widthToDp("10%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: widthToDp("5%"),
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    color: Theme.text.subheading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("3%"),
                  }}
                >
                  Phone:-
                </Text>
                <Text
                  style={{
                    color: Theme.text.heading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("2%"),
                  }}
                >
                  {user ? user.phone : "NA"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: widthToDp("5%"),
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    color: Theme.text.subheading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("3%"),
                  }}
                >
                  BloodGroup:-
                </Text>
                <Text
                  style={{
                    color: Theme.text.heading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("2%"),
                  }}
                >
                  {user ? user.bloodGroup : "NA"}
                </Text>
              </View>
            </View>
            {user ? (
              <ButtonComponent
                name={"Log-Out"}
                style={{
                  width: widthToDp("25%"),
                  borderRadius: heightToDp("20%"),
                  onPress: () => {
                    ClearData();
                    setUser();
                    alert("logged out");
                    navigate("home");
                  },
                }}
                outerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: heightToDp("5%"),
                }}
              />
            ) : null}
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Hospital;
