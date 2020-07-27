import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Screen from "../utils/Screen";
import { Formik, useFormik } from "formik";
const LoginScreen = () => {
  const { handleChange, handleSubmit, handleBlur, touched, values } = useFormik(
    {
      initialValues: { phone: "", password: "" },
      onSubmit: (values) => {
        console.log(values);
      },
    }
  );
  return (
    <Screen>
      <KeyboardAvoidingView
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <TextInput
          underlineColorAndroid="red"
          value={values.phone}
          placeholder="Phone"
          onChangeText={handleChange("phone")}
          onBlur={handleBlur("phone")}
          keyboardType="number-pad"
        />
        <TextInput
          value={values.pass}
          placeholder="Pass"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          keyboardType="email-address"
          textContentType="password"
          secureTextEntry={true}
        />
        <Button title="press This sucker" onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
