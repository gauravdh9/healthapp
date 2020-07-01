const { useState, useEffect } = require("react");

export const useApi = () => {
  const [result, setResult] = useState();
  const [dailylist, setDailylist] = useState({
    Confirmed: [0, 0, 0, 10, 10, 10],
    Recovered: [0, 0, 0, 10, 10, 10],
    Deceased: [0, 0, 0, 10, 10, 10],
    Active: [0, 0, 0, 10, 10, 10],
  });
  const getdata = () => {
    fetch("https://api.covid19india.org/v3/data.json")
      .then((res) => res.json())
      .then((response) => {
        setResult(response.DL);
      });
  };

  const getgraph = () => {
    var Confirmed = [];
    var Recovered = [];
    var Deceased = [];
    var Active = [];
    fetch("https://api.covid19india.org/states_daily.json")
      .then((res) => res.json())
      .then((data) => {
        data.states_daily.map((item, index) => {
          if (item.status === "Confirmed") {
            Confirmed.push(item.dl / 100);
          } else if (item.status === "Recovered") {
            Recovered.push(item.dl / 100);
          } else if (item.status === "Deceased") {
            Deceased.push(item.dl / 100);
          }
        });
        for (let i = 0; i < Confirmed.length; i++) {
          Active.push(
            (Confirmed[i] * 100 - (Recovered[i] * 100 + Deceased[i] * 100)) /
              100
          );
        }

        setDailylist({ Confirmed, Recovered, Deceased, Active });
      });
  };

  useEffect(() => {
    getdata();
    getgraph();
  }, []);
  return { result, dailylist };
};
