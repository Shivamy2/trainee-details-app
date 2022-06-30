import "./App.css";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { data } from "./constants/constant";
import DetailTable from "./components/DetailTable";
import NavBar from "./components/NavBar";
import { filter } from "lodash";
import { AppContext } from "./context";

const App = () => {
  const [userData, setUserData] = useState(data || []);
  const extractTechStack = useCallback(
    (tech) =>
      filter(userData, (item) => {
        return item.projAlc === "0" && item.type === tech;
      }),
    [userData]
  );
  const frontendData = extractTechStack("frontend");
  const backendData = extractTechStack("backend");
  const projAllocated = useMemo(
    () =>
      filter(userData, (item) => {
        return item.projAlc === "1";
      }),
    [userData]
  );

  const dispatchEvent = (action, payload) => {
    switch (action) {
      case "CHANGE_PROJ_ALLOCATION": {
        const { index, value } = payload;
        const data = [...userData];
        data[index - 1].projAlc = value;
        setUserData(data);
        return;
      }
      default:
        return;
    }
  };

  useEffect(() => {
    if (!data) {
      axios
        .get("./modal.json")
        .then((res) => {
          localStorage.setItem("data", JSON.stringify(res.data));
          setUserData(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <AppContext.Provider value={{ userData, dispatchEvent }}>
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
    </AppContext.Provider>
  );
};

export default React.memo(App);
