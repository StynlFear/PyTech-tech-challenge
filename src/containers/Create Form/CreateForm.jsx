/// REACT IMPORT
import { useState } from "react";
import React from "react";
import { Field } from "../../components/Dynamic Field/Dynamicfield.jsx";
import "../../components/Dynamic Field/Dynamicfield.css";
import "./CreateForm.css";
import { Sections } from "../../components/Sections/SectionsField.jsx";
import { Data } from "../../components/DataRetention/DataRetentionPeriod.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { Outlet, Link } from "react-router-dom";
import Generateurl from "../../components/generate_url/generateurl.jsx";
/// DATA IMPORT

export const CForm = () => {
  return (
    <div className="create-form-container">
      <Sidebar/>
      <div class="form-section">
        <h1 class="create-header">Create a Form</h1>
        <div>
          <h1 class="section-header">Title</h1>
          <form>
            <label class="field-txt">Form Title</label>
            <br />
            <input class="field-input" placeholder="Insert  Your title here" />
          </form>
        </div>
        <hr class="section-divider" />
        <div>
          <h1 class="section-header">Dynamic field </h1>
          <Field />
        </div>
        <hr class="section-divider" />
        <div>
          <h1 class="section-header">Sections</h1>
          <Sections />
          <hr class="section-divider" />
          <h1 class="section-header"> Data Retention Period</h1>
          <Data/>
          <hr  class="section-divider"/>
          <router>
            <Link to="/url"><button className="button-submit" type="submit">Submit</button></Link>
          </router>
        </div>
      </div>
    </div>
  );
};
export default CForm;
