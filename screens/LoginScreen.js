import React, { useState, useRef } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  FlatList,
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
import { useApi } from "../hooks/useApi";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { ModalContent, data } from "../components/ModalView";
const LoginScreen = ({ navigation }) => {
  const { Login } = useApi();
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const recaptchaVerifier = useRef(null);
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
      phone: "+91",
      name: "",
      bloodGroup: "Blood Group",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /(([+][9][1]|[0])+\d{10})/,
          "Please Enter a 10 digit Mobile Number "
        )
        .required("This is a Required field to Continue"),
      name: Yup.string()
        .matches(
          /(-?([A-Z].\s)?([A-Z][a-z]+)\s?)+([A-Z]'([A-Z][a-z]+))?/,
          "Enter a Valid Name"
        )
        .required("A name is required to Contine"),
      bloodGroup: Yup.string().min(2).max(3, "Select a Blood group"),
    }),
    onSubmit: async (values) => {
      try {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        const verificationId = await phoneProvider.verifyPhoneNumber(
          values.phone,
          recaptchaVerifier.current
        );
        setVerificationId(verificationId);
        Alert.alert("Otp Successfully Sent");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Screen style={{ justifyContent: "space-between" }}>
      <Listheader icon title={"Become A Donor or Reciepent"} />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
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
              placeholder=" Name"
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

            <ModalView visible={visible} setVisible={setVisible}>
              <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                  <ModalContent
                    {...item}
                    setVisible={setVisible}
                    setFieldValue={setFieldValue}
                  />
                )}
              />
            </ModalView>
          </View>
          {touched.bloodGroup && errors.bloodGroup && (
            <Text>{errors.bloodGroup}</Text>
          )}
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
              placeholder=" Phone Number"
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
              onChangeText={(text) => setCode(text)}
              value={code}
              iconName={"user-secret"}
              placeholder=" Code"
              style={{ width: widthToDp("45%"), height: heightToDp("10%") }}
            />
            <ButtonComponent
              name={"Verify OTP"}
              style={{
                width: widthToDp("30%"),
                borderRadius: heightToDp("20%"),
                onPress: async () => {
                  try {
                    const credential = firebase.auth.PhoneAuthProvider.credential(
                      verificationId,
                      code
                    );
                    await firebase.auth().signInWithCredential(credential);
                    Login(values.name, values.phone, values.bloodGroup);
                  } catch (err) {
                    console.log(err);
                  }
                },
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
