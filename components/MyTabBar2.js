import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "styled-components";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";

export default function MyTabBar({ state, descriptors, navigation, iconname }) {
  const { Theme } = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: Theme.covidscreen.info,
        borderRadius: heightToDp("2%"),
        borderColor: "#12121d",
        padding: heightToDp("1%"),
        marginLeft: widthToDp("5%"),
        marginRight: widthToDp("5%"),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const name = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          const Heading = styled.Text`
            color: ${isFocused ? Theme.text.heading : Theme.text.subheading};
            margin-left: ${widthToDp("2%")}px;
            font-family: MyText;
            font-size: ${widthToDp("3.5%")}px;
          `;
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: heightToDp("6%"),
                backgroundColor: isFocused
                  ? Theme.covidscreen.vector
                  : Theme.infocard.Cbackground,
                flexDirection: "row",

                borderRadius: heightToDp("2%"),
                marginLeft: heightToDp("0.5%"),
                marginRight: heightToDp("0.5%"),
              }}
            >
              <Heading>{name}</Heading>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
