import React from "react";
import "./WorkStationInfo.css";
import { useHistory } from "react-router-dom";
function WorkStation({ workstation }) {
  console.log("GOOD", workstation);
  let history = useHistory();
  const getSchedule = (id) => {
    history.push(`/workstation/schedule/${id}`);
  };
  return (
    <div className="station-container">
      {workstation.map((station) => (
        <div
          key={station.id}
          className="featuredItem"
          onClick={() => getSchedule(station.id)}>
          <span className="featuredTitle">{station.name}</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">Desk {station.id}</span>
            <span className="featuredMoneyRate">
              <div
                className={`${
                  station.isAvailable == 0 ? "red-dot" : "green-dot"
                }`}></div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkStation;
