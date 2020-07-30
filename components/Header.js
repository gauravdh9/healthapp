import React from "react";
import Listheader from "./listheader";
const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Listheader
      title={title}
      onPress={() => navigation.goBack()}
      style={options.headerStyle}
      iconStyle={options.iconStyle}
    />
  );
};

export default Header;
