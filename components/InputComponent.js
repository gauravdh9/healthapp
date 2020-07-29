import React from "react";
import { View, Text } from "react-native";
import { Kohana, Fumi } from "react-native-textinput-effects";
import MaterialsIcon from "react-native-vector-icons/FontAwesome";
import { heightToDp, widthToDp } from "../utils/Size";
import { useTheme } from "styled-components";
const InputComponent = ({
  onChangeText,
  value,
  style,
  iconName,
  placeholder,
  touched,
  onBlur,
  error,
}) => {
  const { Theme } = useTheme();
  return (
    <View>
      <View style={style}>
        <Fumi
          value={value}
          style={{
            margin: heightToDp("2%"),
            borderRadius: heightToDp("2%"),
            flex: 1,
          }}
          iconClass={MaterialsIcon}
          iconName={iconName}
          iconColor={Theme.tabBar.inactive}
          onChangeText={onChangeText}
          label={placeholder}
          iconWidth={30}
          iconSize={15}
          onBlur={onBlur}
        />
      </View>
      {touched && error && (
        <Text style={{ color: Theme.text.subheading, fontFamily: "MyText" }}>
          *{error}
        </Text>
      )}
    </View>
  );
};

export default InputComponent;
