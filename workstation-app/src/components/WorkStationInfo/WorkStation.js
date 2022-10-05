import React from "react";
import "./WorkStationInfo.css";
import { useHistory } from "react-router-dom";
function WorkStation({ workstation }) {
  let history = useHistory();
  const getSchedule = (id) => {
    history.push(`/workstation/schedule/${id}`);
  };
  return (
    <div className="featuredItem" onClick={() => getSchedule(workstation.id)}>
      <span className="featuredTitle">{workstation.name}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Desk {workstation.id}</span>
        <span className="featuredMoneyRate">
          <div
            className={`${
              workstation.isAvailable == 0 ? "red-dot" : "green-dot"
            }`}></div>
        </span>
      </div>
    </div>
  );
}

export default WorkStation;
