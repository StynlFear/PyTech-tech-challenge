// REACT IMPORTS
import React from "react";
import { Outlet, Link } from "react-router-dom";
// FORM DATA IMPORT
import"./create_form.css"
import { Router } from "react-router-dom";
export const CreateForm = () => {
  return (
    <div>
        
        <div className="title_create_form">Create form</div>
        <button href="www.google.com"  class="add_form">
        <span class="plus_create_form">+</span>
        </button>
        <div className="text_under_create_form">Start from Scrath</div>
        <button class="remaning">Only 2 forms left to create!</button>
        <button href="www.google.com">ciau</button>
        
    </div>
  );
};
