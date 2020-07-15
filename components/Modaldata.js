import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import Hospital from "../screens/Hospital";
export default function ModalView({ visible, onpress }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ backgroundColor: "#000000dd", margin: 0 }}
      swipeDirection="down"
      onSwipeComplete={onpress}
    >
      <View
        style={{
          justifyContent: "flex-start",
          top: "2%",
          height: "70%",
        }}
      >
        <Hospital style={{ top: "30%" }} onpress={onpress} />
      </View>
    </Modal>
  );
}
