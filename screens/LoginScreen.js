import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import Screen from "../utils/Screen";
import { useFormik } from "formik";
import InputComponent from "../components/InputComponent";
import firebase from "../utils/firebase";
import { heightToDp, widthToDp } from "../utils/Size";
import ButtonComponent from "../components/ButtonComponent";
import { useTheme } from "styled-components";
import Listheader from "../components/listheader";
import { Blood } from "../utils/Svg";
import ModalView from "../components/ModalView";
import * as Yup from "yup";

const LoginScreen = () => {
  const [visible, setVisible] = useState(false);
  const { Theme } = useTheme();
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      phone: "",
      code: "",
      name: "",
      bloodGroup: "Blood Group",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /(([+][9][1]|[0])+\d{10})|[6789]+\d{9}/,
          "Please Enter a 10 digit Mobile Number"
        )
        .required("This is a Required field to Continue"),
      code: Yup.string()
        .matches(/\d{6}/, "Code Must be 6 digit Long")
        .required("Enter a Valid Code"),
      name: Yup.string()
        .matches(
          /(-?([A-Z].\s)?([A-Z][a-z]+)\s?)+([A-Z]'([A-Z][a-z]+))?/,
          "Enter a Valid Name"
        )
        .required("A name is required to Contine"),
      bloodGroup: Yup.string()
        .min(2)
        .max(3, "Blood Group can't be larger than 3 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Screen style={{ justifyContent: "space-between" }}>
      <Listheader icon title={"Become A Donor or Reciepent"} />
      <KeyboardAvoidingView
        style={{
          justifyContent: "flex-start",
          overflow: "hidden",
          alignItems: "center",
          backgroundColor: Theme.covidscreen.info,
          flex: 1,
          borderTopLeftRadius: heightToDp("5%"),
          borderTopRightRadius: heightToDp("5%"),
        }}
        behavior="position"
      >
        <Blood height={heightToDp("40%")} width={widthToDp("70%")} />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: widthToDp("80%"),
            }}
          >
            <InputComponent
              onChangeText={handleChange("name")}
              value={values.name}
              iconName={"user"}
              placeholder="Enter Name"
              style={{
                width: widthToDp("55%"),
                height: heightToDp("10%"),
              }}
              error={errors.name}
              touched={touched.name}
              onBlur={handleBlur("name")}
            />
            <ButtonComponent
              name={values.bloodGroup}
              style={{
                width: widthToDp("25%"),
                borderRadius: heightToDp("20%"),
                onPress: () => setVisible(true),
              }}
              outerStyle={{ justifyContent: "center", alignItems: "center" }}
              blood
            />
            <ModalView
              visible={visible}
              setVisible={setVisible}
              setFieldValue={setFieldValue}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: widthToDp("80%"),
            }}
          >
            <InputComponent
              onChangeText={handleChange("phone")}
              value={values.phone}
              iconName={"phone"}
              placeholder="Enter Phone Number"
              style={{ width: widthToDp("60%"), height: heightToDp("10%") }}
              error={errors.phone}
              touched={touched.phone}
              onBlur={handleBlur("phone")}
            />
            <ButtonComponent
              name={"Get OTP"}
              style={{
                width: widthToDp("20%"),
                borderRadius: heightToDp("20%"),
                onPress: () => handleSubmit(),
              }}
              outerStyle={{ justifyContent: "center", alignItems: "center" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: widthToDp("80%"),
            }}
          >
            <InputComponent
              onChangeText={handleChange("code")}
              value={values.code}
              iconName={"user-secret"}
              placeholder="Enter Code"
              style={{ width: widthToDp("45%"), height: heightToDp("10%") }}
              error={errors.code}
              touched={touched.code}
              onBlur={handleBlur("code")}
            />
            <ButtonComponent
              name={"Verify OTP"}
              onPress={handleSubmit}
              style={{
                width: widthToDp("30%"),
                borderRadius: heightToDp("20%"),
              }}
              outerStyle={{ justifyContent: "center", alignItems: "center" }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
