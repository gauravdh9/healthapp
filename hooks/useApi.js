const { useState, useContext } = require("react");
const {
  BEDS_DATA,
  COVID_DATA,
  HOSPITAL_DATA,
  LABS_DATA,
  REQUESTS,
  LOGIN,
} = require("../utils/Url");
import AsyncStorage from "@react-native-community/async-storage";
import { UserContext } from "../App";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const useApi = () => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [query, setQuery] = useState();
  const [hospital, setHospital] = useState();
  const [screen, setScreen] = useState({});
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

  const Requests = () => {
    fetch(REQUESTS)
      .then((res) => res.json())
      .then((response) => {
        setQuery(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Login = async (name, phone, bloodGroup) => {
    try {
      let response = await fetch(LOGIN, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, bloodGroup }),
      });
      let Data = await response.json();
      setUser(Data);
      storeData(Data);
    } catch (error) {}
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
    query,
    setQuery,
    Login,
    Requests,

    setScreen,
  };
};
