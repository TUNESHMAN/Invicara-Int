import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Make a call to the login endpoint. It takes 2 arguments. The endpoint and the credentials
    axios
      .post("https://invicara.herokuapp.com/api/v1/auth/login", credentials)
      .then((res) => {
        // We retrieve the token from our response and store it in local storage
        localStorage.setItem("token", res.data.token);
        props.history.push("/workstations");
      })
      .catch((error) => {
        throw error;
      });
  };
  //   To monitor the state of the login form
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  //   We need a change handler function
  const handleLoginChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer"></div>

      <div className="container">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="email@example.com"
          name="email"
          id="email"
          onChange={handleLoginChange}
          value={credentials.email}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          onChange={handleLoginChange}
          value={credentials.password}
        />

        <button type="submit">Login</button>
        {/* <div>
          Not a member? <Link to="/register"> Sign Up</Link>{" "}
        </div> */}
      </div>
    </form>
  );
}

export default Login;
