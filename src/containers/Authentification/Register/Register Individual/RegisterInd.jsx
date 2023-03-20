// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { RegisterFormData } from "./RegisterFormData";
import "./RegisterInd.css"
export const RegisterIndPage = () => {
  return (
    <div>
     <div className="fm-bg">
     <div class="txt-1">
        <p class="t1-su">Sign up as an Individual</p>
        <p class="t2-rind">Please sign in to your registered account</p>
      </div>
      <form className="fm">
        {RegisterFormData &&
          RegisterFormData.map((data) => {
            return (
              <div className="fm-1" key={data.id}>
                <label className="fm-lb-rind" htmlFor={data.name}>{data.name}</label><br/>
                <input className="fm-in" type={data.type} placeholder={data.placeholder} />
                <div><button className="btn-1"><h1 className="text-btn1">Create account</h1> </button></div>
              </div>
            );
          })}
      </form>
      </div>
    </div>
  );
};
