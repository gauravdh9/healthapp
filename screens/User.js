import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import Screen from "../utils/Screen";
import Toggle from "../components/Toggle";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { heightToDp, widthToDp } from "../utils/Size";
import { UserContext } from "../utils/Context";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import Infographics from "../components/InfoGraphics";
import { Card, Heading, Description } from "./Symptom";

const Info = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.Theme.covidscreen.vector, theme.Theme.infocard.Cbackground],
}))`
  height: ${heightToDp("20%")}px;
  width: ${widthToDp("60%")}px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.Theme.infocard.Cbackground};
  border-radius: ${widthToDp("10%")}px;
  border: ${heightToDp("0.5%")}px solid
    ${({ theme }) => theme.Theme.text.subheading};
`;
const About = styled(Card)`
  margin: ${heightToDp("3%")}px ${widthToDp("4%")}px;
  margin-bottom: 0;
`;
const Head = styled(Heading)`
  padding: ${heightToDp("1%")}px;
`;
const ClearData = async () => {
  try {
    await AsyncStorage.removeItem("@storage_Key");
  } catch (error) {}
};

const data = [
  {
    id: "1",
    title: "Soham",
    image: require("../assets/soham.jpg"),
    profile: "https://github.com/sohamsingh29",
  },
  {
    id: "2",
    title: "Gaurav",
    image: require("../assets/gaurav.jpg"),
    profile: "https://github.com/gauravdh9",
  },
  {
    id: "3",
    title: "Ayush",
    image: require("../assets/ayush.jpg"),
    profile: "https://github.com/routayush1",
  },
];

const User = () => {
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
        <View
          style={{
            padding: widthToDp("7%"),
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Toggle />
          {user ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 0.3,
              }}
            >
              <Text
                style={{
                  color: Theme.text.heading,
                  fontFamily: "MyText",
                  fontSize: heightToDp("2%"),
                }}
              >
                Log Out :-
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Log Out",
                    "Do you want to Log-Out of your account? ",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          ClearData();
                          setUser();
                          navigate("home");
                        },
                      },
                    ],
                    { cancelable: false }
                  );
                }}
              >
                <Icon
                  name={"sign-out-alt"}
                  size={widthToDp("5%")}
                  color={Theme.text.heading}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: widthToDp("4%"),
            paddingTop: 0,
          }}
        >
          <View
            style={{
              height: widthToDp("25%"),
              width: widthToDp("25%"),
              borderRadius: widthToDp("20%"),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Theme.infocard.Cbackground,
              borderWidth: widthToDp("0.4%"),
              borderColor: Theme.text.subheading,
            }}
          >
            {user ? (
              <Icon
                name={"user"}
                size={widthToDp("13%")}
                color={Theme.text.heading}
              />
            ) : (
              <Text
                style={{
                  fontSize: heightToDp("13%"),
                  fontFamily: "MyText",
                  color: Theme.text.heading,
                }}
              >
                ?
              </Text>
            )}
          </View>
          <Info>
            {user ? (
              <Text
                style={{
                  color: Theme.text.heading,
                  fontFamily: "MyText",
                  fontSize: heightToDp("3%"),
                }}
              >
                My Info
              </Text>
            ) : null}
            <View
              style={{
                width: "80%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: Theme.text.subheading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("2.5%"),
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
                  {user ? user.phone.toString().slice(2, 12) : "NA"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: Theme.text.subheading,
                    fontFamily: "MyText",
                    fontSize: heightToDp("2.5%"),
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
          </Info>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: Theme.covidscreen.info,
            borderTopLeftRadius: widthToDp("10%"),
            borderTopRightRadius: widthToDp("10%"),
          }}
        >
          <About>
            <Head>What is HealthCare ?</Head>
            <Description>
              HealthCare lets you find blood donation requests and comes with a
              Delhi based COVID tracker that gives you all related information
              on hospitals, testing labs, symptoms and prevention tips for the
              disease.
            </Description>
          </About>
          <Text
            style={{
              color: Theme.text.heading,
              fontSize: heightToDp("3.3%"),
              fontFamily: "MyText",
              alignSelf: "center",
            }}
          >
            Developers
          </Text>
          <FlatList
            contentContainerStyle={{
              justifyContent: "space-around",
              flexDirection: "row",
            }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Infographics graph {...item} account />}
            numColumns={3}
            scrollEnabled={false}
          />
        </View>
      </View>
    </Screen>
  );
};

export default User;
