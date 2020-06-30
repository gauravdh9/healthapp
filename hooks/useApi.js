const { useState, useEffect } = require("react");

export const useApi = () => {
  const [result, setResult] = useState();
  const getdata = () => {
    fetch("https://api.covid19india.org/v3/data.json")
      .then((res) => res.json())
      .then((response) => {
        setResult(response.DL);
      });
  };
  useEffect(() => {
    getdata();
  }, [result]);
  return { result };
};
