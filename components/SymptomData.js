import { Fever, Cough, RunnyNose, Headache, Congestion } from "../utils/Svg";

export const SymptomData = () => {
  return [
    {
      key: "one",
      title: "Congestion",

      Graphics: Congestion,
      symptom: true,
    },
    {
      key: "two",
      title: "Headache",

      Graphics: Headache,
      symptom: true,
    },
    {
      key: "three",
      title: "Cough ",

      Graphics: Cough,
      symptom: true,
    },
    {
      key: "four",
      title: "Fever",

      Graphics: Fever,
      symptom: true,
    },
    {
      key: "five",
      title: "Runny Nose",

      Graphics: RunnyNose,
      symptom: true,
    },
  ];
};
