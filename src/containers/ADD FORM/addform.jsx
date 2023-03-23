import React from 'react';
import { FaHome, FaPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import "./addform.css"

const Addform = () => {
 

  return (
    <div >
        <Sidebar/>
        <div className='g-color-back1'></div>
        
        <div className="cf-t1">Create a Form</div>
        <router><Link to="/CreateForm"><button className="cf1-b">+</button></Link></router>
        <div className="cf-txt">Start Form Scratch</div>
        <router>
        <Link to="/CreateForm"><button className='cf2-b'> <div className="cf-txt2">Only 2 forms left to create!</div></button></Link>
        </router>
    </div>
  );
};

export default Addform;