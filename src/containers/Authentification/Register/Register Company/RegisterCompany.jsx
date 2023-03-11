// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { RegisterFormData } from "./RegisterFormData";
import "./RegisterCompany.css"
export const RegisterCompPage = () => {
  return (
    <div className="background">
     <div className="fm-bg">
     <div class="txt-1">
        <p class="t1">Sign up as a Company</p>
        <p class="t2">Please sign in to your registered account</p>
      </div>
      <form className="fm">
        {RegisterFormData &&
          RegisterFormData.map((data) => {
            return (
              <div className="fm-1" key={data.id}>
                <label className="fm-lb" htmlFor={data.name}>{data.name}</label><br/>
                <input className="fm-in" type={data.type} placeholder={data.placeholder} />
                <div><button className="btn-2"><h1>Create account</h1></button></div>
              </div>
            );
          })}
      </form>
      </div>
    </div>
  );
};
