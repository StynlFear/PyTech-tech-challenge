import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { LoginFormData } from "./LoginFormData";
import "./Login.css";

export const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const validateForm = () => {
    const errors = {};
    
    if (!formData.Email) {
      errors.Email = "Email is required";
    }
    
    if (!formData.Password) {
      errors.Password = "Password is required";
    }
    
    setErrors(errors);
    
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://api-user-forms.herokuapp.com/v1/users/verify",
          { email: formData.Email ,
            password: formData.Password}
        );
        
        if (response.data ) {
          // Redirect to home page if email and password match in database
          window.location.href = "/home";
        }
      } catch (error) {
        console.error(error);
        // TODO: handle error response
      }
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
        {errors[data.name] && (
          <div className="log-form--error ">{errors[data.name]}</div>
        )}
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
