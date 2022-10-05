import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Make a call to the register endpoint. It takes 2 arguments. The endpoint and the credentials
    axios
      .post(" http://localhost:7000/api/v1/auth/register", credentials)
      .then((res) => {
        //route to login
        props.history.push("/login");
      })
      .catch((error) => {
        throw error;
      });
  };
  //   To monitor the state of the login form
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //   We need a change handler function
  const handleRegisterChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="cover">
      <div className="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="firstName" // The name helps us during form submission to keep track of the fields
              id="firstName" // We use the id to link the input with the label
              placeholder="John Doe"
              onChange={handleRegisterChange}
              value={credentials.firstName}
            />
            <span></span>
            <label htmlFor="email">First Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              name="email" // The name helps us during form submission to keep track of the fields
              id="email" // We use the id to link the input with the label
              placeholder="email@example.com"
              onChange={handleRegisterChange}
              value={credentials.email}
            />
            <span></span>
            <label htmlFor="email">Last Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              name="email" // The name helps us during form submission to keep track of the fields
              id="email" // We use the id to link the input with the label
              placeholder="email@example.com"
              onChange={handleRegisterChange}
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
              onChange={handleRegisterChange}
              value={credentials.password}
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Register</button>
          <div className="signup_link">
            Have an account?
            <Link to="/login"> Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
