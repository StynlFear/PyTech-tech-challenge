import { useState } from "react";
import React from "react";
import { Dropdown, Option } from "../DropDown/DropDown.jsx";
import { DropdownMenuSec } from "../DropDownMenu/DropDownButton.jsx";
import { SectionEditor } from "../Editor/Editor.jsx";
// CSS IMPORT
import "./Options.css";
export const Options = () => {
  const [formValues, setFormValues] = useState([
    { OptionsSection: "", },
  ]);

  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    event.preventDefault();
    setFormValues([...formValues, { OptionsSection: "",}]);
  };

  let removeFormFields = (i) => {
    event.preventDefault();
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div>
        
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
              {index ? (
                <i
<<<<<<< HEAD
                  class="fa fa-trash delete-options move-trash-cf"
=======
                  class="fa fa-trash delete-options"
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
                  onClick={() => removeFormFields(index)}
                />
              ) : null}
              <input
<<<<<<< HEAD
                class="field-input-opt move-input-cf"
=======
                class="field-input-opt"
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
                type="text"
                name="OptionsSection"
                value={element.OptionsSection || ""}
                onChange={(e) => handleChange(index, e)}
              />
          </div>
        ))}
        <div className="button-section">
          <button id="btn" class="create-btn" onClick={() => addFormFields()}>
            Add new Field
          </button>
        </div>
      </form>
    </div>
  );
};
