import { useApi } from "../hooks/useApi";

import { Confirmed, Rec, Active, Death } from "./Svg";

export const Data = () => {
  const { result } = useApi();
  if (result) {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: result.total.confirmed,
        Location: Confirmed,
        color: "#6c757d",
      },
      {
        id: "2",
        title: "Active",
        number:
          result.total.confirmed -
          (result.total.recovered + result.total.deceased),
        Location: Active,
        color: "#007bff",
      },
      {
        id: "3",
        title: "Recovered",
        number: result.total.recovered,
        Location: Rec,
        color: "#28a745",
      },
      {
        id: "4",
        title: "Deceased",
        number: result.total.deceased,
        Location: Death,
        color: "#ff073a",
      },
    ];
  } else {
    return [
      {
        id: "1",
        title: "Confirmed",
        number: 0,
        Location: Confirmed,
        color: "#6c757d",
      },
      {
        id: "2",
        title: "Active",
        number: 0,
        Location: Active,
        color: "#007bff",
      },
      {
        id: "3",
        title: "Recovered",
        number: 0,
        Location: Rec,
        color: "#28a745",
      },
      {
        id: "4",
        title: "Deceased",
        number: 0,
        Location: Death,
        color: "#ff073a",
      },
    ];
  }
};
