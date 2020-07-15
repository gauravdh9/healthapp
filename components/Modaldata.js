import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import Hospitallist from "../screens/Hospitallist";
export default function ModalView({ visible, onpress }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ backgroundColor: "red", margin: 0 }}
      swipeDirection="down"
      onSwipeStart={onpress}
    >
      <View
        style={{
          justifyContent: "flex-start",
          top: "30%",
          height: "70%",
        }}
      >
        <Hospitallist style={{ top: "30%" }} onpress={onpress} />
      </View>
    </Modal>
  );
}
