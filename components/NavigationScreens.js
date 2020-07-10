import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Covidscreen from "../screens/Covidscreen";
import Hospitallist from "../screens/Hospitallist";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { useTheme } from "styled-components";

const Tab = AnimatedTabBarNavigator();

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 20}
      color={props.tintColor}
    />
  );
};

const NavigationScreens = () => {
  const { Theme } = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          backgroundColor: Theme.covidscreen.vector,
          elevation: 25,
          borderBottomWidth: 0,
          borderColor: Theme.text.heading,
          useNativeDriver: true,
        },
        activeTintColor: Theme.text.heading,
        inactiveTintColor: Theme.text.subheading,
        activeBackgroundColor: Theme.infocard.Cbackground,
      }}
      appearence={{
        topPadding: 10,
        dotSize: "small",
        horizontalPadding: 10,
        cornerRadius: 20,
        whenInactiveShow: "icon-only",
        dotCornerRadius: 20,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Covidscreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} tintColor={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="hospital"
        component={Hospitallist}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name="snapchat-ghost"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreens;
