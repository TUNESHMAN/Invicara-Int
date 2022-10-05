// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import WorkStations from "./components/WorkStationInfo/WorkStations";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Schedule from "./components/Schedule";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/workstations" component={WorkStations} />

      <PrivateRoute
        exact
        path="/workstation/schedule/:id"
        component={Schedule}
      />
    </React.Fragment>
  );
}

export default App;
