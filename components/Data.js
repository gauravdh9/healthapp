import { useApi } from "../hooks/useApi";

export const Data = () => {
  const { result } = useApi();

  if (result) {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: result.total.confirmed,
        location: require("../assets/confirmed.svg"),
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
        location: require("../assets/recovered.svg"),
      },
      {
        id: "4",
        title: "Death",
        number: result.total.deceased,
        location: require("../assets/death.svg"),
      },
    ];
  } else {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: 0,
        location: require("../assets/confirmed.svg"),
      },
      {
        id: "2",
        title: "Active",
        number: 0,
        location: require("../assets/patient.svg"),
      },
      {
        id: "3",
        title: "Recovered",
        number: 0,
        location: require("../assets/recovered.svg"),
      },
      {
        id: "4",
        title: "Death",
        number: 0,
        location: require("../assets/death.svg"),
      },
    ];
  }
};
