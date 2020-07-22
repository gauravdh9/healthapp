import { useTheme } from "styled-components";
export const LottieData = () => {
  const { Theme } = useTheme();
  return [
    {
      key: "one",
      title: "Title 1",
      text: "Description.\nSay something cool",
      image: Theme.gif.mask,
      backgroundColor: "#59b2ab",
    },
    {
      key: "two",
      title: "Title 2",
      text: "Other cool stuff",
      image: Theme.gif.distance,
      backgroundColor: "#febe29",
    },
    {
      key: "three",
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: Theme.gif.home,
      backgroundColor: "#22bcb5",
    },
    {
      key: "four",
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: Theme.gif.sanitizer,
      backgroundColor: "#22bcb5",
    },
  ];
};
