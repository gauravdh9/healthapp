import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

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
        elevation: 5,
        height: "6%",
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
                height: 50,
                backgroundColor: isFocused
                  ? Theme.covidscreen.vector
                  : Theme.infocard.Cbackground,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Icon
                name={icon}
                raised
                size={25}
                color={isFocused ? Theme.tabBar.active : Theme.tabBar.inactive}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
