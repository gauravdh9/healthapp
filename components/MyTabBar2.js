import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";
const Heading = styled.Text`
  color: ${({ theme }) => theme.Theme.text.heading};
  margin-left: 10px;
  font-family: MyText;
  font-size: 15px;
`;

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
        borderRadius: heightToDp("5%"),
        borderColor: "#12121d",
        padding: 5,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          overflow: "hidden",
          borderRadius: 50,
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
                borderRadius: 50,
                marginLeft: 5,
                marginRight: 5,
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
