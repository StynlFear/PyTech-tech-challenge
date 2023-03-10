// REACT IMPORTS
import React from "react";
// CSS IMPORT
import "./resetpassword.css"
export const ResetPassword = () => {
  return (
    
    <div>
        
        <div class="reset">
        <div class="reset-h3">
            <h3>Reset password</h3>
        </div>
        <div class="reset-p">
            <p>Create a new password for your account.</p>
        </div>
    <form action="" class="reset-form">
        <div class="reset-form--label-pass">Password</div>
        <div class="reset-form--input-pass">
            <input type="password" name="" id="" placeholder="New Password"></input>
        </div>
        <div class="reset-form--label-confirm">Confirm password</div>
        <div class="reset-form--input-confirm"><input type="password" name="" id="" placeholder="Confirm Password"></input>   </div>   
        <button class="reset-btn">Confirm password</button>    
    </form>
    </div>
    </div>
  );
};
