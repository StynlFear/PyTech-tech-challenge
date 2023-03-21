// REACT IMPORTS
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
// FORM DATA IMPORT
import axios from "../../../../components/Axios/Axios";
import { RegisterFormData } from "./RegisterFormData";
import "./RegisterCompany.css";
export const RegisterCompPage = () => {
  const [userReg, setUserReg] = useState([{}]);
  let handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/v1/users/", {
        name: userReg.fullName,
        password: userReg.password,
        email: userReg.email,
        address: userReg.fullAdress,
        fiscal_code: userReg.fiscalCode,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
        
      
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUserReg({ ...userReg, [id]: value });
    console.log("zzz", userReg);
  };
  return (
    <div className="background">
        <img src="./src/images/background.jpg" alt="" className="log-back-img5" />
      <div className="fm-bg">
        <div class="txt-1">
          <p class="t1-rcomp">Sign up as a Company</p>
          <p class="t2-rcomp">Please sign in to your registered account</p>
        </div>
        <form className="fm">
          {RegisterFormData &&
            RegisterFormData.map((data) => {
              return (
                <div className="fm-1" key={data.id}>
                  <label className="fm-lb-rcomp" htmlFor={data.name}>
                    {data.name}
                  </label>
                  <br />
                  <input
                    id={data.id}
                    className="fm-in"
                    type={data.type}
                    placeholder={data.placeholder}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          <router>
              <div> <button
                className="btn-2"
                type="submit"
                onClick={(e) => handleClick(e)}
              >
                <h1><div className="btn-t-rcomp">  <Link to="/Login">
          Create account</Link></div> </h1>

          
              </button></div>
          </router>
        </form>
      </div>
    </div>
  );
};
