import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import Toggle from "../components/Toggle";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { heightToDp, widthToDp } from "../utils/Size";
import { UserContext } from "../App";
const ClearData = async () => {
  try {
    await AsyncStorage.removeItem("@storage_Key");
  } catch (error) {}
};

const Hospital = () => {
  const { navigate } = useNavigation();
  const { setUser } = useContext(UserContext);
  useEffect(() => {}, []);
  return (
    <View style={{ position: "relative", margin: 20 }}>
      <Toggle />
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
        outerStyle={{ justifyContent: "center", alignItems: "center" }}
      />
    </View>
  );
};

export default Hospital;
