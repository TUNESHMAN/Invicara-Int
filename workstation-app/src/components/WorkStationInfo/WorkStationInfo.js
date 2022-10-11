import React, { useEffect, useState } from "react";
import "./WorkStationInfo.css";
import WorkStation from "./WorkStation";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function WorkStationInfo() {
  const [workStations, setWorkStations] = useState([]);

  const getWorkStations = () => {
    axiosWithAuth()
      .get(`/api/v1/workstation`)
      .then((response) => {
        const allWorkStations = response.data;
        setWorkStations(allWorkStations);
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getWorkStations();
  }, []);
  return (
    <div className="featured">
      {workStations?.map((workstation) => (
        <WorkStation key={workstation.id} workstation={workstation} />
      ))}
    </div>
  );
}
