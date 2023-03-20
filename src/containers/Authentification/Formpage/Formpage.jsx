// REACT IMPORTS
import React from "react";
// FORM DATA IMPORT
import "./Formpage.css"
export const Formpage = () => {
  return (
    
    <div>
       
        <form action="#">
            <div className="titleformpage">
                Create a Form
            </div>
            <div className="subtitle_titleformpage">
                Title
            </div>
            <label htmlFor="#" className="mini-title-form">Title Form</label>
            <input type="text" placeholder="Placeholder" className="input-title-form"/>
            <hr className="line-form"/>
         
            <div className="subtitlecreateform1">
                Dynamic Fields
            </div>
            <label className="mini-title-dynamicfields">Dynamic Fields</label>
            <input type="text" placeholder="Placeholder" className="dynamic_drop_down"/>
            
            <div className="subtitlecreateform2">
                Sections
            </div>
            <div className="subtitlecreateform3">
                Date Retintion Period
            </div>
        </form> 
    </div>
  );
};
