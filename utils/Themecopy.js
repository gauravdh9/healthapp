export default Themes = {
  colors: {
    light: {
      infocard: {
        Cbackground: "#f0f0f0",
        shadow: "black",
      },

      covidscreen: {
        vector: "#f3e1e1",
        info: "#f6f6f6",
      },
      text: {
        heading: "#222831",
        subheading: "#929aab",
      },
      tabBar: {
        active: "#222831",
        inactive: "#808080",
      },
      status: "dark-content",
      gif: {
        mask: require("../assets/maskLight.gif"),
        distance: require("../assets/distancelight.gif"),
        home: require("../assets/homeLight.gif"),
        sanitizer: require("../assets/sani.gif"),
      },
      highLight: "#f0f0f0",
    },
    dark: {
      infocard: {
        Cbackground: "#1e1e30",
        shadow: "black",
      },

      covidscreen: {
        vector: "#313250",
        info: "#12121d",
      },
      text: {
        heading: "white",
        subheading: "#929aab",
      },
      tabBar: {
        active: "white",
        inactive: "#808080",
      },
      status: "light-content",
      gif: {
        mask: require("../assets/mask.gif"),
        distance: require("../assets/distance.gif"),
        home: require("../assets/home.gif"),
        sanitizer: require("../assets/animation.gif"),
      },
      highLight: "#5c5470",
    },
  },
};
