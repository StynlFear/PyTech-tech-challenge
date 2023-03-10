// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { ForgotFormPassword } from "./ForgotFormPassword";
import "./forgotpassword.css"
export const Forgotpassword = () => {
  return (
    
    <div>
        
        <div class="forgt">
        <div class="forgt-h3">
            <h3>Forgot password</h3>
        </div>
        <div class="forgt-p">
            <p>New password set to your email adress.</p>
        </div>
    <form action="" class="forgt-form">
        <div class="forgt-form--label">Email</div>
        <div >
            <input class="forgt-form--input" type="email" name="Email" id="0" placeholder="Introduce your full email"></input>
        </div>  
        <button className="forgt-btn">Send email</button>    
    </form>
    </div>
    </div>
  );
};
