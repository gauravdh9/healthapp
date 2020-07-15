import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const widthToDp = (number) => {
  let givenWidth = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
const heightToDp = (number) => {
  let givenheight = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenheight) / 100);
};

export { widthToDp, heightToDp };
