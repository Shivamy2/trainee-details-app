import "./App.css";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { data } from "./constants/constant";
import DetailTable from "./components/DetailTable";
import NavBar from "./components/NavBar";
import { filter } from "lodash";

const App = () => {
  const [userData, setUserData] = useState(data || []);
  const frontendData = useMemo(
    () =>
      filter(userData, (item) => {
        return item.projAlc === "0" && item.type === "frontend";
      }),
    [userData]
  );
  const backendData = useMemo(
    () =>
      filter(userData, (item) => {
        return item.projAlc === "0" && item.type === "backend";
      }),
    [userData]
  );
  const projAllocated = useMemo(
    () =>
      filter(userData, (item) => {
        return item.projAlc === "1";
      }),
    [userData]
  );
  console.log("details", frontendData, backendData, projAllocated);
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
    <div>
      <div className="site-navbar">
        <NavBar className={"mb-4 mt-0 site-width mx-auto"} />
      </div>
      <div className="site-width pb-3 p-md-3 pt-md-0 mx-auto">
        <DetailTable title={"Frontend"} data={frontendData} />
        <DetailTable title={"Backend"} data={backendData} className="mt-5" />
        <DetailTable
          title={"Project Allocated"}
          data={projAllocated}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default React.memo(App);
