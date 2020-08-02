import React, { useEffect, useState } from "react";
import { AppearanceProvider } from "react-native-appearance";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import AsyncStorage from "@react-native-community/async-storage";
import { useFonts } from "expo-font";
import Main from "./components/Main";
import { UserContext } from "./utils/Context";
enableScreens();

const Usercontext = ({ children }) => {
  const [user, setUser] = useState({});
  const [button, setButton] = useState();
  useEffect(() => {
    let x;
    try {
      AsyncStorage.getItem("@storage_Key").then((response) => {
        x = JSON.parse(response);
        setUser(x);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, button, setButton }}>
      {children}
    </UserContext.Provider>
  );
};
export default function App() {
  const [loaded] = useFonts({
    MyText: require("./assets/fonts/Bariol-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <AppearanceProvider>
      <Usercontext>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Usercontext>
    </AppearanceProvider>
  );
}
