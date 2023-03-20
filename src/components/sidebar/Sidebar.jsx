// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";

import { Router } from "react-router-dom";
export const SideBar = () => {
  const menuItem=[
    {
      path:"/Login",
      name: "Login",
    },
    {
      path:"/Forgot",
      name: "Forgot",
    
    },
    {
      path:"/Reset",
      name: "Reset",
    }
  ]
  
  return (
  <div>

  
    <div className="container12">
        <div className="sidebar12">
          <div className="top_section12">
            <div className="bars12">
              <h1>Logo</h1>
              <div className="bars12">
              </div>
            </div>
          </div>
        </div>
       
     
    </div>
    </div>
  );
};