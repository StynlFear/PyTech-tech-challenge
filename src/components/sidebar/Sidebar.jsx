import React from 'react';
import './Sidebar.css';
import { FaHome, FaPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";


const Sidebar = () => {
  const buttons = [
    { text: 'Home', icon: <FaHome /> ,link:"/home" }, 
    { text: 'Create Form', icon: <FaPlus />,link:"/AddForms" },
    { text: 'Forms', icon: <FaList />,link:"/Forms" },
    { text: 'Logout', icon: <FaSignOutAlt />,link:"/Login" },
  ];

  return (
    <div className="sidebar">
      <h1 class="sidebar-h sidebar-text">Inteligent Forms</h1>
      <hr className='sidebar-hr'/>
      {buttons.map((button) => (
  <Link to={button.link} className="sidebar-btn" key={button.text}>
    {button.icon}
    <span className="sidebar-text">{button.text}</span>
  </Link>
))}

    </div>
  );
};

export default Sidebar;