// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";
import"./pageuser.css"
import { Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "../sidebar/Sidebar";
export const Pageuser = () => {
  return (
    <div >
       <div className="back-pg"> </div>
      <Sidebar/>
       <section className="up-sec1">
        <div className="up-user-img"></div>
        <img src="./src/images/imag-up-top.png" alt="ada" className="up-top-img"/>
       </section>
       <section className="trans-sec">
        <div className="title-trans-sec">Flexible Plans</div>
        <div className="txt-trans-sec">  Expend your subscription to create more forms and to make time more efficient</div>
       </section>
       <section className="up-sec2">
        <div className="up-free">
              <div className="icon-book icon-book2">  
                <FontAwesomeIcon icon={faBookBookmark} size="2x" color="#696cff" />
              </div>
              <div className="up-text-title">Free</div>
              <div className="up-b1-text">A simple start for everyone</div>
              <div class="up-price"><sup>$</sup>0<sub>/year</sub></div>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check1"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check2"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check3"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check4"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check5"/>
              <div className="up-l-text1">Create forms</div>
              <div className="up-l-text2 up-l-text1">Browse and Update forms</div>
              <div className="up-l-text3   up-l-text1">Generate form URL</div>
              <div className="up-l-text4   up-l-text1">View form submissions </div>
              <div className="up-l-text5   up-l-text1">Generate submision PDF</div>
              <div className="number-forms-text">Only 3 forms you can create</div>
              <button className="try-b1 b1-text">Try</button>           
        </div>
        <div className="up-normal">
              <div className="icon-book">  
                <FontAwesomeIcon icon={faBookBookmark} size="2x" color="#696cff" />
              </div>
              <div className="up-b-text">Our most popular plan</div>
              <hr className="up-line"/>
              <div className="up-text-title-n">Normal</div>
              <div className="up-b2-text">For small to medium businesses</div>
              <div class="up-price-n"><sup>$</sup>49<sub>/year</sub></div>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check1"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check2"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check3"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check4"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check5"/>
              <div className="up-l-n-text1 up-normal-l-text">Create forms</div>
              <div className="up-l-n-text2 up-normal-l-text">Browse and Update forms</div>
              <div className="up-l-n-text3  up-normal-l-text">Generate form URL</div>
              <div className="up-l-n-text4  up-normal-l-text">View form submissions </div>
              <div className="up-l-n-text5  up-normal-l-text">Generate submision PDF</div>
              <div className="number-forms-text2">Only 50 forms you can create</div>
              <button className="try-b2 b2-text">Try</button>
        </div>
      
            <div className="up-premium">
              <div className="icon-book icon-book2">  
                <FontAwesomeIcon icon={faBookBookmark} size="2x" color="#696cff" />
              </div>
              <div className="up-text-title">Premium</div>
              <div className="up-b1-text">Solution for big organizations</div>
              <div class="up-price"><sup>$</sup>99<sub>/year</sub></div>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check1"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check2"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check3"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check4"/>
              <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="check5"/>
              <div className="up-l-text1">Create forms</div>
              <div className="up-l-text2 up-l-text1">Browse and Update forms</div>
              <div className="up-l-text3   up-l-text1">Generate form URL</div>
              <div className="up-l-text4   up-l-text1">View form submissions </div>
              <div className="up-l-text5   up-l-text1">Generate submision PDF</div>
              <div className="number-forms-text">Unlimited number of forms</div>
              <button className="try-b1 b1-text">Try</button>
            </div>
            
       </section>
       </div>
       
   
  );
};
   