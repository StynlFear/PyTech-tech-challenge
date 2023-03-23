import React from 'react';
import { FaHome, FaPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import "./generate.css"

const Generate = () => {
 

  return (
    <div >
        <div className='g-color-back'></div>
        <Sidebar/>
        <div className="g-tit1">Genereate form URL</div>
        <div className="g-tit2">Direct URL of your form</div>
        <div className="g-tit3">Your form is securely published and ready to use at this address.</div>
        <div className="g-tit4">Link to share</div>
        <input type="text" name="" id="" className='g-inp1'/>
        <button className='g-but1'>Copy link</button>
        <div className="g-tit5">Invite by email</div>
        <input type="text" name="" id="" className='g-inp2'/>
        <button className='g-but2'>Invite</button>
        <div className="g-tit6">Share form</div>
        <div className="g-tit7">Share your form link through QR codes.</div>
        <router>
        <Link to="/qr"><button className="g-but3"> QR CODE</button></Link>
       
        </router>
        <img src="./src/images/QR.png" alt="" className='g-qr-img'/>
    </div>
  );
};

export default Generate;