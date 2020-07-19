const { useState, useEffect } = require("react");

export const useApi = () => {
  const [result, setResult] = useState();
  const [hospital, setHospital] = useState();
  const [covidhos, setCovidhos] = useState({
    total: [],
    withVentilators: [],
    withoutVentilators: [],
  });

  const getdata = () => {
    fetch("http://healthx-api.herokuapp.com/getcoviddata")
      .then((res) => res.json())
      .then((response) => {
        setResult(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hospitaldata = () => {
    fetch("https://healthx-api.herokuapp.com/hospitaldata")
      .then((res) => res.json())
      .then((response) => {
        setHospital(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const covidhospitaldata = () => {
    fetch("https://healthx-api.herokuapp.com/getbeds")
      .then((res) => res.json())
      .then((response) => {
        setCovidhos(response[0]);
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
    covidhos,
    covidhospitaldata,
  };
};
