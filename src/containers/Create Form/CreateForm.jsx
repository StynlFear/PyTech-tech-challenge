/// REACT IMPORT
import { useState } from 'react';
import React from 'react';
import Dropdown from 'react-dropdown';
import { Field } from '../../components/Dynamic Field/Dynamicfield.jsx';
import "../../components/Dynamic Field/Dynamicfield.css"
import "./CreateForm.css"
import { DropdownMenu } from '../../components/DropDownMenu/DropDownMenu.jsx';
/// DATA IMPORT

  
 
  export const CForm = () => {
    
    return (
      <div>
        <h1 class='create-header' >Create a Form</h1>
        <div>
        <h1 class = "section-header">Title</h1>
        <form>
          <label class='field-txt'>Form Title</label><br/>
          <input class= "field-input" placeholder='Insert  Your title here' />
        </form>
        </div>
        <hr class="divider"/>
        <div>
        <h1 class="section-header" >Dynamic field </h1>
        <Field/>
      </div>
      <hr/>
      <div><h1 class="section-header">Sections</h1> 
      
      </div>
      </div>
    );
  };
  export default CForm