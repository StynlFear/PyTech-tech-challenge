// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";
// FORM CSS
import "./Choose.css"
// ASSETS IMPORT
import SignComp from './sign-comp.svg'
import SignPub from './sign-pub.svg'
import SignInd from './sign-ind.svg'
export const PageType = () => {
  return (
    <div >
    <div class="bg-re">
      <div>
        <p class="t1">Create Account</p>
        <p class="t2">Sign up for free and become a member.</p>
        <p class="t3">Choose Account type</p>
      </div>
      <div class="bx">
        <div class="bx-1">
        <router>
          <Link to="/RegisterComp"> <img src={SignComp}  class="img-1" /></Link>
          </router>
        </div>
        <div class="bx-1">
        <router>
          <Link to="/RegisterPub"> <img src={SignPub}  class="img-3" /></Link>
          </router>
        </div>
        <div class="bx-1">
        <router>
          <Link to="/RegisterInd"> <img src={SignInd}  class="img-2" /></Link>
          </router>
        </div>
        <div class="tx-2">
          <p class="t4">Already have an account?</p>
        </div>
        <div class="tx-3">
            <router>
          <Link to="/Login" class="t5">Log in</Link>
          </router>
        </div>
      </div>
    </div>
    </div>
  );
};
