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
<<<<<<< HEAD
    <div>
=======
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
    <div className="create-form-container">
      <div>
        <h1 class="create-header">Create a Form</h1>
        <div>
<<<<<<< HEAD
          <h1 class="section-header ">Title</h1>
          <form>
            <div className="move-input-cf">
            
            </div>
=======
          <h1 class="section-header">Title</h1>
          <form>
            <label class="field-txt">Form Title</label>
            <br />
            <input class="field-input" placeholder="Insert  Your title here" />
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
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
<<<<<<< HEAD
    </div>
  );
};

=======
  );
};
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
export default CForm;
