const { useState, useContext } = require("react");
const {
  BEDS_DATA,
  COVID_DATA,
  HOSPITAL_DATA,
  LABS_DATA,
  REQUESTS,
  LOGIN,
  POST,
  DELETE,
} = require("../utils/Url");
import AsyncStorage from "@react-native-community/async-storage";
import { UserContext } from "../utils/Context";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const useApi = () => {
  const { user, setUser, button, setButton } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [result, setResult] = useState();
  const [query, setQuery] = useState();
  const [hospital, setHospital] = useState();
  const [refresh, setRefresh] = useState(false);
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
    setRefresh(true);
    fetch(REQUESTS)
      .then((res) => res.json())
      .then((response) => {
        response.map((item) => {
          if (user.phone == item.phone) {
            setButton(item);
          }
        });
        setQuery(response);
        setRefresh(false);
        setLoad(false);
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

  const PostRequest = (hospital, requestBloodGroup) => {
    fetch(POST, {
      method: "post",
      headers: {
        Authorization: `Bearer ` + user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hospital, requestBloodGroup }),
    })
      .then((res) => res.json())
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteRequest = () => {
    fetch(DELETE, {
      method: "delete",
      headers: { Authorization: "Bearer " + user.token },
    })
      .then((res) => {
        res.json();
      })
      .then((response) => {
        setButton();
        Requests();
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
    query,
    setQuery,
    Login,
    Requests,
    PostRequest,
    refresh,
    load,
    setLoad,
    button,
    DeleteRequest,
  };
};
