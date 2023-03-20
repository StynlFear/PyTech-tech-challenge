/// REACT IMPORT
import { useState } from "react";
import React from "react";
import { Field } from "../../components/Dynamic Field/Dynamicfield.jsx";
import "../../components/Dynamic Field/Dynamicfield.css";
import "./CreateForm.css";
import { Sections } from "../../components/Sections/SectionsField.jsx";
import { Data } from "../../components/DataRetention/DataRetentionPeriod.jsx";
/// DATA IMPORT

export const CForm = () => {
  return (
    <div>
    <div className="create-form-container">
      <div>
        <h1 class="create-header">Create a Form</h1>
        <div>
          <h1 class="section-header ">Title</h1>
          <form>
            <div className="move-input-cf">
            
            </div>
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
          <button className="button-submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CForm;
