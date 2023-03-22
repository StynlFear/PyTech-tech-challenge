// REACT IMPORTS
import React from "react";
// CSS IMPORT
import "./resetpassword.css"
export const ResetPassword = () => {
  return (
    
    <div>
         <img src="./src/images/background.jpg" alt="" className="log-back-img11" />
        <div class="reset">
        <div class="reset-h3">
            <h3 className="rp-title-cont">Reset password</h3>
        </div>
        <div class="reset-p">
            <p className="rp-textcr">Create a new password for your account.</p>
        </div>
    <form action="" class="reset-form">
        <div class="reset-form--label-pass">Password</div>
        <div class="reset-form--input-pass">
            <input type="password" name="" id="" placeholder="New Password"></input>
        </div>
        <div class="reset-form--label-confirm">Confirm password</div>
        <div class="reset-form--input-confirm"><input type="password" name="" id="" placeholder="Confirm Password"></input>   </div>   
        <button class="reset-btn"><div className="txt-btn-rp">Confirm password</div></button>    
    </form>
    </div>
    </div>
  );
};
