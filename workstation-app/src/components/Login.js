import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";


function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Make a call to the login endpoint. It takes 2 arguments. The endpoint and the credentials
    axios
      .post(" http://localhost:7000/api/v1/auth/login", credentials)
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
    <div className="cover">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="email" // The name helps us during form submission to keep track of the fields
              id="email" // We use the id to link the input with the label
              placeholder="email@example.com"
              onChange={handleLoginChange}
              value={credentials.email}
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleLoginChange}
              value={credentials.password}
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
          <div className="signup_link">
            Not a member?
            <Link to="/register"> Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
