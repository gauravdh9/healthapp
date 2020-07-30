import React, { useContext } from "react";
import LoginScreen from "../screens/LoginScreen";
import BloodScreen from "../screens/BloodScreen";
import { UserContext } from "../App";

const BloodStack = () => {
  const { user } = useContext(UserContext);

  return user ? <BloodScreen /> : <LoginScreen />;
};

export default BloodStack;
