import { Fever, Cough, RunnyNose, Headache, Congestion } from "../utils/Svg";

export const SymptomData = () => {
  return [
    {
      key: "one",
      title: "Congestion",
      // text:
      //   "Masks can help prevent the spread of the virus from the person wearing the mask to others.",
      Graphics: Congestion,
      symptom: true,
    },
    {
      key: "two",
      title: "Headache",
      // text:
      //   "Maintain at least 1 metre (3 feet) distance between yourself and others.",
      Graphics: Headache,
      symptom: true,
    },
    {
      key: "three",
      title: "Cough ",
      // text:
      //   "Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover.",
      Graphics: Cough,
      symptom: true,
    },
    {
      key: "four",
      title: "Fever",
      // text:
      //   "To protect yourself and others against COVID-19, clean your hands frequently and thoroughly. ",
      Graphics: Fever,
      symptom: true,
    },
    {
      key: "five",
      title: "Runny Nose",
      // text:
      //   "To protect yourself and others against COVID-19, clean your hands frequently and thoroughly. ",
      Graphics: RunnyNose,
      symptom: true,
    },
  ];
};
