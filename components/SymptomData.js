import { Fever, Cough, RunnyNose, Headache, Congestion } from "../utils/Svg";

export const SymptomData = () => {
  return [
    {
      key: "one",
      title: "Congestion",
      text:
        "Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene.",
      Image: Congestion,
    },
    {
      key: "two",
      title: "Headache",
      text:
        "Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.",
      Image: Headache,
    },
    {
      key: "three",
      title: "Cough ",
      text:
        "Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.",
      Image: Cough,
    },
    {
      key: "four",
      title: "Fever",
      text:
        "To protect yourself and others against COVID-19, clean your hands frequently and thoroughly. Use alcohol-based hand sanitizer or wash your hands with soap and water. If you use an alcohol-based hand sanitizer, make sure you use and store it carefully.",
      Image: Fever,
    },
    {
      key: "five",
      title: "Runny Nose",
      text:
        "To protect yourself and others against COVID-19, clean your hands frequently and thoroughly. Use alcohol-based hand sanitizer or wash your hands with soap and water. If you use an alcohol-based hand sanitizer, make sure you use and store it carefully.",
      Image: RunnyNose,
    },
  ];
};
