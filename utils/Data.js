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
    { id: "1", title: "Hospitals", Location: Hospital, color: "#ec5e5f" },
    { id: "2", title: "Testing Labs", Location: Testing, color: "#007bff" },
    { id: "3", title: "Symptoms", Location: Symptom, color: "#28a745" },
    { id: "4", title: "Preventions", Location: Prevention, color: "#6c757d" },
  ],
];
