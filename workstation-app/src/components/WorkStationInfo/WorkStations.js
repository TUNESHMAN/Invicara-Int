import React from "react";
import Sidebar from "../Sidebar";
import "./WorkStationInfo.css";
import Topbar from "../Topbar/Topbar";
import Home from "./Home";

function WorkStations() {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container">
        <Sidebar className="side-bar" />
        <Home className="home" />
      </div>
    </React.Fragment>
  );
}

export default WorkStations;
