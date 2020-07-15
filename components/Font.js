import { useFonts } from "expo-font";
export function Font() {
  const [loaded] = useFonts({
    MyText: require("../assets/fonts/Comfortaa-VariableFont_wght.ttf"),
  });
  if (!loaded) {
    return null;
  }
}
