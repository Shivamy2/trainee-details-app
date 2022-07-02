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

  const updateTraineeData = (payload, key) => {
    const { index, value } = payload;
    const data = [...userData];
    data[index - 1][key] = value;
    setUserData(data);
    console.log("Data", userData);
    localStorage.setItem("data", JSON.stringify(data));
  };

  // reducer for various actions
  const dispatchEvent = (action, payload) => {
    switch (action) {
      case "STORE_DATA": {
        localStorage.setItem("data", JSON.stringify(payload));
        setUserData(payload);
        return;
      }
      case "CHANGE_PROJ_ALLOCATION": {
        updateTraineeData(payload, "projAlc");
        return;
      }
      case "UPDATE_COMMENT": {
        updateTraineeData(payload, "comment");
        return;
      }
      default:
        return;
    }
  };

  // generic function for extracting frontend and backend trainees from locastorage
  const extractTechStack = useCallback(
    (tech) =>
      filter(userData, (item) => {
        return item.projAlc === "0" && item.type === tech;
      }),
    [userData]
  );

  const frontendData = extractTechStack("frontend");
  const backendData = extractTechStack("backend");

  // extracting the trainees who have been allocated in any project
  const projAllocated = useMemo(
    () =>
      filter(userData, (item) => {
        return item.projAlc === "1";
      }),
    [userData]
  );

  // storing the dummy data in localStorage if somehow data is removed from there.
  useEffect(() => {
    if (!data) {
      axios
        .get("./modal.json")
        .then((res) => {
          dispatchEvent("STORE_DATA", res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []); //eslint-disable-line

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
