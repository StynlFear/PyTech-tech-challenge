// REACT IMPORTS
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
// FORM DATA IMPORT
import axios from "../../../../components/Axios/Axios";
import { RegisterFormData } from "./RegisterFormData";
import "./RegisterInd.css";
export const RegisterIndPage = () => {
  const [userReg, setUserReg] = useState([{}]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let handleClick = (e) => {
    e.preventDefault();

    // validate form fields
    const formErrors = {};
    if (!userReg.fullName) {
      formErrors.fullName = "Full name is required";
    }
    if (!userReg.password) {
      formErrors.password = "Password is required";
    }
    if (!userReg.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userReg.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!userReg.fullAdress) {
      formErrors.fullAdress = "Address is required";
    }

    // set errors and mark form as submitted
    setErrors(formErrors);
    setIsSubmitting(true);

    // make API call if there are no errors
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("/v1/users/", {
          name: userReg.fullName,
          password: userReg.password,
          email: userReg.email,
          address: userReg.fullAdress,
        })
        .then(function (response) {
          console.log(response);
          window.location.href = "/login";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUserReg({ ...userReg, [id]: value });

    // clear error for this field
    setErrors((errors) => ({ ...errors, [id]: undefined }));
  };
  return (
    <div className="background">
      <img src="./src/images/background.jpg" alt="" className="log-back-img5" />
      <div className="fm-bg">
        <div class="txt-1">
          <p class="t1-rcomp">Sign up as an Individual</p>
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
                    type={data.type}
                    placeholder={data.placeholder}
                    onChange={handleChange}
                    // display error message if there is one
                    className={errors[data.id] ? "fm-in error" : "fm-in"}
                  />
                  {errors[data.id] && (
                    <div className="error-message">{errors[data.id]}</div>
                  )}
                </div>
              );
            })}
            <div>
              {" "}
              <button
                className="btn-2"
                type="submit"
                onClick={(e) => handleClick(e)}
              >
                <h1>
                  <div className="btn-t-rcomp">
                    {" "}Create account
                  </div>{" "}
                </h1>
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};
