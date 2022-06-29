import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "./constants/constant";
import DetailTable from "./components/DetailTable";

const App = () => {
  const [userData, setUserData] = useState(data || []);
  useEffect(() => {
    if (!data) {
      axios
        .get("./modal.json")
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("data", JSON.stringify(res.data));
          setUserData(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="App py-3 p-md-3">
      <DetailTable />
    </div>
  );
};

export default React.memo(App);
