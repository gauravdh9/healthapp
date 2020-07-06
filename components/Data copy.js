import { useApi } from "../hooks/useApi";

import { Confirmed, Rec, Active, Death } from "./Svg";

export const Data = () => {
  const { result, dailylist } = useApi();
  if (result && dailylist) {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: result.total.confirmed,
        Location: Confirmed,
        color: "#ff073a",
        list: dailylist.Confirmed,
      },
      {
        id: "2",
        title: "Active",
        number:
          result.total.confirmed -
          (result.total.recovered + result.total.deceased),
        Location: Active,
        color: "#007bff",
        list: dailylist.Active,
      },
      {
        id: "3",
        title: "Recovered",
        number: result.total.recovered,
        Location: Rec,
        color: "#28a745",
        list: dailylist.Recovered,
      },
      {
        id: "4",
        title: "Deceased",
        number: result.total.deceased,
        Location: Death,
        color: "#6c757d",
        list: dailylist.Deceased,
      },
    ];
  } else {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: 0,
        Location: Confirmed,
        color: "#ff073a",
        list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        id: "2",
        title: "Active",
        number: 0,
        Location: Active,
        color: "#007bff",
        list: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        id: "3",
        title: "Recovered",
        number: 0,
        Location: Rec,
        color: "#28a745",
        list: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        id: "4",
        title: "Deceased",
        number: 0,
        Location: Death,
        color: "#6c757d",
        list: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];
  }
};
