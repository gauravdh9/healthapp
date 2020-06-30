import { useApi } from "../hooks/useApi";

export const Data = () => {
  const { result } = useApi();

  if (result) {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: result.total.confirmed,
        location: require("../assets/patient.svg"),
      },
      {
        id: "2",
        title: "Active",
        number:
          result.total.confirmed -
          (result.total.recovered + result.total.deceased),
        location: require("../assets/patient.svg"),
      },
      {
        id: "3",
        title: "Recovered",
        number: result.total.recovered,
        location: require("../assets/patient.svg"),
      },
      {
        id: "4",
        title: "Death",
        number: result.total.deceased,
        location: require("../assets/patient.svg"),
      },
    ];
  } else {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: 0,
        location: require("../assets/patient.svg"),
      },
      {
        id: "2",
        title: "Active",
        number: 0,
        location: require("../assets/patient.svg"),
      },
      {
        id: "3",
        title: 0,
        number: "300",
        location: require("../assets/patient.svg"),
      },
      {
        id: "4",
        title: "Death",
        number: 0,
        location: require("../assets/patient.svg"),
      },
    ];
  }
};
