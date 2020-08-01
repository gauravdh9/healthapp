import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Screen from "../utils/Screen";
import ButtonComponent from "./ButtonComponent";
import { useTheme } from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import Listheader from "../components/listheader";
export const ModalContent = ({
  label,
  backgroundColor,
  setVisible,
  setFieldValue,
}) => {
  const handleChange = () => {
    setFieldValue("bloodGroup", label);
    setVisible(false);
  };
  const { Theme } = useTheme();
  return (
    <TouchableOpacity onPress={handleChange}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Theme.covidscreen.vector,
          padding: widthToDp("3%"),
          width: widthToDp("20%"),
          height: heightToDp("10%"),
          margin: widthToDp("8%"),
          borderRadius: widthToDp("10%"),
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: Theme.text.heading,
            fontFamily: "MyText",
            fontSize: heightToDp("3.8%"),
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const data = [
  {
    label: "A+",
    value: 1,
  },
  {
    label: "A-",
    value: 2,
  },
  {
    label: "B+",
    value: 3,
  },
  {
    label: "B-",
    value: 4,
  },
  {
    label: "AB+",
    value: 5,
  },
  {
    label: "Ab-",
    value: 6,
  },
  {
    label: "O+",
    value: 7,
  },
  {
    label: "O-",
    value: 8,
  },
];

const ModalView = ({ visible, setVisible, children, user, name }) => {
  let title;
  if (name) {
    title = name;
  } else {
    title = `${user ? user.name : ""}'s Blood Request`;
  }
  const { Theme } = useTheme();
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <Listheader icon title={title} />
      <View style={{ backgroundColor: Theme.covidscreen.vector, flex: 1 }}>
        <Screen
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            height: heightToDp("50%"),
            backgroundColor: Theme.infocard.Cbackground,
            borderTopLeftRadius: widthToDp("10%"),
            borderTopRightRadius: widthToDp("10%"),
          }}
        >
          {children}
          <ButtonComponent
            name={"Close"}
            style={{
              width: widthToDp("20%"),
              borderRadius: heightToDp("20%"),
              onPress: () => setVisible(false),
            }}
            outerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: heightToDp("5%"),
            }}
          />
        </Screen>
      </View>
    </Modal>
  );
};

export default ModalView;
