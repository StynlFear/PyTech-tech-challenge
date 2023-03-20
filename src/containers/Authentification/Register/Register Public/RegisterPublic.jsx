// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { RegisterFormData } from "./RegisterFormData";
import "./RegisterPublic.css"
// ASSETS IMPORT
import Background from '../background_login_signup.svg'
export const RegisterPubPage = () => {
  return (
    <div class="background">
     <div className="fm-bg">
     <div class="txt-1">
        <p class="t1">Sign up as a Public Institution</p>
        <p class="t2">Please sign in to your registered account</p>
      </div>
      <form className="fm">
        {RegisterFormData &&
          RegisterFormData.map((data) => {
            return (
              <div className="fm-1" key={data.id}>
                <label className="fm-lb" htmlFor={data.name}>{data.name}</label><br/>
                <input className="fm-in" type={data.type} placeholder={data.placeholder} />
                <div><button className="btn-1"><h1>Create account</h1> </button></div>
              </div>
            );
          })}
      </form>
        </div>
    </div>
  );
};
