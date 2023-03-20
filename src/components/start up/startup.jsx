// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";
import"./startup.css"
import { Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export const Startup = () => {
  return (
    <div>
        <div className="sp-top-grid">
        <FontAwesomeIcon icon={faCheckCircle}  color="white" size="2x" className="sp-check"/>
        <div className="sp-text">Intelligent Forms</div>
        <button className="sp-login">Log in</button>
        <button className="sp-sign">Sign Up</button>
        <hr className="sp-bar" />
        </div>
       
        <section >
            <div className="sp-title1">Welcome to Intelligent Forms</div>

            <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="sp-check1"/>
            <div className="sp-t1">
            With our inteligent forms, you can transform your mundane tasks into a seamless experience.
            </div>
            
            <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="sp-check2"/>
            <div className="sp-t2">
            Say goodbye to manual data entry and hello to intelligent forms that feature report generation, and workflow automation.
                </div>
            <FontAwesomeIcon icon={faCheckCircle}  color="#002372" size="1x" className="sp-check3"/>
            <div className="sp-t3">
                Let us help you make the most out of your business with our powerful form solutions!
            </div>
            <img src="./src/images/sp-1.png" alt="img" className="sp-img-1" />
        </section>
        <section>
            <div className="sp-title2">What we have to offer to you?</div>
            <div className="sp-cont1">
                <img src="./src/images/sp-2.png" alt=""  className="sp-img-2"/>
                <div className="sp-txt-cont">Build the form you need in minutes and save your time</div>
                <div className="sp-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem risus, cursus non neque ut, tincidunt cursus diam. Maecenas pharetra vestibulum dignissim. Aliquam non tellus tempus, pellentesque ligula a, tincidunt tellus. Donec nec venenatis ligula. Proin non scelerisque lacus.</div>

            </div>
            <div className="sp-cont2">
                <img src="./src/images/sp-3.png" alt=""  className="sp-img-3"/>
                <div className="sp-txt-cont">Accessing the form with the QR code or link</div>
                <div className="sp-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem risus, cursus non neque ut, tincidunt cursus diam. Maecenas pharetra vestibulum dignissim. Aliquam non tellus tempus, pellentesque ligula a, tincidunt tellus. Donec nec venenatis ligula. Proin non scelerisque lacus.</div>

            </div>
            <div className="sp-cont3">
            <img src="./src/images/sp-4.png" alt=""  className="sp-img-4"/>
            <div className="sp-txt-cont">Scanning of the necessary document and automatic filling of the form</div>
            <div className="sp-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem risus, cursus non neque ut, tincidunt cursus diam. Maecenas pharetra vestibulum dignissim. Aliquam non tellus tempus, pellentesque ligula a, tincidunt tellus. Donec nec venenatis ligula. Proin non scelerisque lacus.</div>
            </div>
        </section>
        <section>
            <div className="sp-subtitle1">Flexible Plans</div>
            <div className="sp-subtitle1text">Expend your subscription to create more forms and to make time more efficient</div>
            <img src="./src/images/sp-5.png" alt="" className="sp-img-5"/>
        </section>
        <section className="sp-buy">
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

       <section className="up-girl-end">
            <div className="up-girl-back"></div>
            <img src="./src/images/girl.png" alt="img" className="sp-girlimg"/>
            <div className="sp-title-girl">Still not convinced? Start with now!</div>
            <div className="sp-text-girl">You will get full access to create 3 forms for free.</div>
            <button className="up-girl-btn">Sign Up for free</button>
       </section>
    </div>

    
  );
};
   