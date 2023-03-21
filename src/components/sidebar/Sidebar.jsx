import React from 'react';
import './Sidebar.css';
import { FaHome, FaPlus, FaList, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const buttons = [
    { text: 'Home', icon: <FaHome /> },
    { text: 'Create Form', icon: <FaPlus /> },
    { text: 'Forms', icon: <FaList /> },
    { text: 'Logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="sidebar">
      <h1 class="sidebar-h sidebar-text">Inteligent Forms</h1>
      <hr className='sidebar-hr'/>
      {buttons.map((button) => (
        <button className="sidebar-btn" key={button.text}>
          {button.icon}
          <span className="sidebar-text">{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;