// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import { ForgotFormPassword } from "./ForgotFormPassword";
import "./forgotpassword.css"
export const Forgotpassword = () => {
  return (
    
    <div>
              <img src="./src/images/background.jpg" alt="" className="log-back-img10" />

        <div class="forgt">
        <div class="forgt-h3">
            <h3 className="fg-tit-text">Forgot password</h3>
        </div>
        <div class="forgt-p">
            <p className="fp-newtxt">New password set to your email adress.</p>
        </div>
    <form action="" class="forgt-form">
        <div class="forgt-form--label">Email</div>
        <div >
            <input class="forgt-form--input" type="email" name="Email" id="0" placeholder="Introduce your full email"></input>
        </div>  
        <button className="forgt-btn"><div className="text-f-btn">Send email</div></button>    
    </form>
    </div>
    </div>
  );
};
