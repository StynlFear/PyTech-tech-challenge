// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { ForgotFormData } from "./ForgotFormData";
import "./Forgot.css"
export const ForgotPage = () => {
  return (
    <div>
      <div class="container">
        <div class="title">
            <h3>Log in</h3>
        </div>
        <div class="text">
            <p>Enter your account details below.</p>
        </div>
      <form className="form">
        {LoginFormData &&
          LoginFormData.map((data) => {
            return (
              <div  key={data.id}>
                <label className={data.className} htmlFor={data.name}>{data.name}</label><br/>
                <input className="emailinput" type={data.type} placeholder={data.placeholder} /><br/>
              </div>
            );
          })}
      </form>
      </div>
      
    </div>
  );
};
