const { useState } = require("react");
const {
  BEDS_DATA,
  COVID_DATA,
  HOSPITAL_DATA,
  LABS_DATA,
} = require("../utils/Url");
export const useApi = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [hospital, setHospital] = useState();
  const [covidhos, setCovidhos] = useState({
    total: [],
    withVentilators: [],
    withoutVentilators: [],
  });
  const [lab, setLab] = useState();

  const getdata = () => {
    fetch(COVID_DATA)
      .then((res) => res.json())
      .then((response) => {
        setResult(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hospitaldata = () => {
    fetch(HOSPITAL_DATA)
      .then((res) => res.json())
      .then((response) => {
        setHospital(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const covidhospitaldata = () => {
    fetch(BEDS_DATA)
      .then((res) => res.json())
      .then((response) => {
        setCovidhos(response[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const TestingData = () => {
    fetch(LABS_DATA)
      .then((res) => res.json())
      .then((response) => {
        setLab(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    result,
    getdata,
    hospital,
    hospitaldata,
    setHospital,
    covidhos,
    covidhospitaldata,
    lab,
    TestingData,
    loading,
    setLoading,
  };
};
