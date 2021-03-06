import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { heightToDp, widthToDp } from "../utils/Size";
import styled from "styled-components";

const Name = styled.Text`
  font-family: MyText;
  font-size: ${heightToDp("1.3s%")}px;
  color: ${({ theme }) => theme.Theme.text.heading};
`;

export default function MyTabBar({ state, descriptors, navigation, options }) {
  const { Theme } = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: Theme.covidscreen.info,
        height: heightToDp("6%"),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          overflow: "hidden",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const icon = route.name;
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
                justifyContent: "center",
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon
                  name={icon}
                  size={widthToDp("5%")}
                  color={
                    isFocused ? Theme.tabBar.active : Theme.tabBar.inactive
                  }
                />
                <Name>{options.name}</Name>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
