// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";
// FORM DATA IMPORT
import { LoginFormData } from "./LoginFormData";
import"./Login.css"
import { Router } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div>
     
      <div class="log">
        <div class="log-tit">
            <h1 className="login-title-txt1">Log in</h1> 
        </div>
        <div className="log-txt">
            <p className="login-txt1">Enter your account details below.</p>
        </div>
      <form className="log-form">
        {LoginFormData &&
          LoginFormData.map((data) => {
            return (
              <div  key={data.id}>
                <label className='log-form--label' htmlFor={data.name}>{data.name}</label><br/>
                <input className="log-form--input" type={data.type} placeholder={data.placeholder} /><br/>
              </div>
            );
          })}
      </form>
      </div>
      <div>
       <input type="checkbox"></input>
        <div className="log-remb">Remember me</div>
        <router>
      <Link to="/Forgot"><p class="log-forgot">Forgot password?</p></Link>
      </router>
      <button className="log-btn" >Login</button> 
      <div class="log--dntacc">Don't have an account?</div>
      <router>
        <Link to="/Type"><p class="log-sign">Sign Up</p></Link>  
        </router>
      </div> 
    </div>
  );
};
