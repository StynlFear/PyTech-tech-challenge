import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { LoginFormData } from "./LoginFormData";
import "./Login.css";

export const LoginPage = () => {
  const [formData, setFormData] = useState({});
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://api-user-forms.herokuapp.com/v1/users/",
        formData
      );
      console.log(response.data);
      if (response.data) {
        // Redirect to home page if user exists in database
        <Link to="/Type"></Link>
      }
    } catch (error) {
      console.error(error);
      // TODO: handle error response
    }
  };

  return (
    <div>
      <img src="./src/images/background.jpg" alt="" className="log-back-img" />
      <div class="log">
        <div class="log-tit">
          <h1 className="login-title-txt1">Log in</h1>
        </div>
        <div className="log-txt">
          <p className="login-txt1">Enter your account details below.</p>
        </div>
        <form className="log-form" onSubmit={handleSubmit}>
          {LoginFormData &&
            LoginFormData.map((data) => {
              return (
                <div key={data.id}>
                  <label className="log-form--label" htmlFor={data.name}>
                    {data.name}
                  </label>
                  <br />
                  <input
                    className="log-form--input"
                    type={data.type}
                    name={data.name}
                    placeholder={data.placeholder}
                    onChange={handleInputChange}
                  />
                  <br />
                </div>
              );
            })}
        </form>
      </div>
      <div>
        <input type="checkbox" className="login-check"></input>
        <div className="log-remb">Remember me</div>
        <Link to="/Forgot">
          <p class="log-forgot1">Forgot password?</p>
        </Link>
        <button className="log-btn" onClick={handleSubmit}>
          Login
        </button>
        <div class="log--dntacc">Don't have an account?</div>
        <Link to="/Type">
          <p class="log-sign">Sign Up</p>
        </Link>
      </div>
    </div>
  );
};