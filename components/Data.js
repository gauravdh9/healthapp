import {
  Confirmed,
  Recovered,
  Deceased,
  Active,
  Prevention,
  Symptom,
  Testing,
  Hospital,
} from "./Svg";

export const Data = [
  [
    {
      id: "1",
      title: "Confirmed",
      Location: Confirmed,
      color: "#ff073a",
    },
    {
      id: "2",
      title: "Active",
      Location: Active,
      color: "#007bff",
    },
    {
      id: "3",
      title: "Recovered",
      Location: Recovered,
      color: "#28a745",
    },
    {
      id: "4",
      title: "Deceased",
      Location: Deceased,
      color: "#6c757d",
    },
  ],
  [
    { id: "1", title: "Hospital", Location: Hospital },
    { id: "2", title: "Testing", Location: Testing },
    { id: "3", title: "Symptom", Location: Symptom },
    { id: "4", title: "Prevention", Location: Prevention },
  ],
];
