const { useState, useEffect } = require("react");

export const useApi = () => {
  const [result, setResult] = useState();
  const [dailylist, setDailylist] = useState();
  const getdata = () => {
    fetch("https://api.covid19india.org/v3/data.json")
      .then((res) => res.json())
      .then((response) => {
        setResult(response.DL);
      });
  };

  const getgraph = () => {
    fetch("https://healthx-api.herokuapp.com/getgraph")
      .then((res) => res.json())
      .then((data) => {
        setDailylist({
          Confirmed: data.Confirmed,
          Recovered: data.Recovered,
          Deceased: data.Deceased,
          Active: data.Active,
        });
      });
  };

  useEffect(() => {
    getgraph();
    getdata();
  }, []);
  return { result, dailylist };
};
