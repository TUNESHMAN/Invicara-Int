import React, { useState } from "react";
import station from "../Extras/station.mp4";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
function LandingPage() {
  
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <section
        className={`${
          toggle === false
            ? "showcase"
            : toggle === true
            ? "showcase active"
            : ""
        }`}>
        <header>
          <h2 className="logo">WorkStation</h2>
          <div
            className={`${
              toggle === false
                ? "toggle"
                : toggle === true
                ? "toggle active"
                : ""
            }`}
            onClick={handleToggleClick}></div>
        </header>
        <video src={station} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          {" "}
          <h2>WorkStation</h2>
          <p>
            Need a work desk? We are at your beck and
            call.
          </p>
          <a href="/">Explore</a>
        </div>
        <ul className="social">
          <li>
            <NavLink to="/">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
            </NavLink>
          </li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/login">Login/Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">News</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
