const { useState, useEffect } = require("react");

export const useApi = () => {
  const [result, setResult] = useState();
  const getdata = () => {
    fetch("http://healthx-api.herokuapp.com/getcoviddata")
      .then((res) => res.json())
      .then((response) => {
        setResult(response);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return { result };
};
