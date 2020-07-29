import React from "react";
import { View, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import Screen from "../utils/Screen";
import ButtonComponent from "./ButtonComponent";
import { useTheme } from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import { useFormikContext } from "formik";
const ModalContent = ({
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
          backgroundColor,
          padding: widthToDp("3%"),
          width: widthToDp("20%"),
          height: heightToDp("10%"),
          margin: widthToDp("8%"),
          borderRadius: widthToDp("10%"),
          elevation: 5,
        }}
      >
        <Text style={{ color: Theme.text.heading, fontFamily: "MyText" }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const data = [
  {
    backgroundColor: "#fc5c65",
    label: "A+",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    label: "A-",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    label: "B+",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    label: "B-",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    label: "AB+",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    label: "Ab-",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    label: "O+",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    label: "O-",
    value: 8,
  },
];

const ModalView = ({ visible, setVisible, setFieldValue }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <Screen
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: heightToDp("50%"),
        }}
      >
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
        <ButtonComponent
          name={"Close"}
          style={{
            width: widthToDp("20%"),
            borderRadius: heightToDp("20%"),
            onPress: () => setVisible(false),
          }}
          outerStyle={{ justifyContent: "center", alignItems: "center" }}
        />
      </Screen>
    </Modal>
  );
};

export default ModalView;
