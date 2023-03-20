import { useState } from "react";
import React from "react";
import { Dropdown, Option } from "../DropDown/DropDown.jsx";
import { DropdownMenu } from "../DropDownMenu/DropDownMenu.jsx";
import { Options } from "../Options/Options.jsx";
// CSS IMPORT
import "../../containers/Create Form/CreateForm.css";
export const Field = () => {
  const [formValues, setFormValues] = useState([
    { DynamicField: "", Label: "", PlaceHolder: "" },
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
    setFormValues([
      ...formValues,
      { DynamicField: "", Label: "", PlaceHolder: "" },
    ]);
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
<<<<<<< HEAD
    <div >
=======
    <div>
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <DropdownMenu>
            {index ? (
              <i
<<<<<<< HEAD
                class="fa fa-trash delete move-trash-cf-field"
                onClick={() => removeFormFields(index)}
              />
            ) : null}
            <label class="field-txt move-input-cf">Dynamic Field Name </label>
            <br />
            <input
              class="field-input move-input-cf"
=======
                class="fa fa-trash delete"
                onClick={() => removeFormFields(index)}
              />
            ) : null}
            <label class="field-txt">Dynamic Field Name </label>
            <br />
            <input
              class="field-input"
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
              type="text"
              name="DynamicField"
              value={element.DynamicField || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
<<<<<<< HEAD
            <label class="field-txt move-input-cf">Label</label>
            <br />
            <input
              class="field-input move-input-cf"
=======
            <label class="field-txt">Label</label>
            <br />
            <input
              class="field-input"
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
              type="text"
              name="Label"
              value={element.Label || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
<<<<<<< HEAD
            <label class="field-txt move-input-cf">PlaceHolder</label>
            <br />
            <input
              class="field-input move-input-cf"
=======
            <label class="field-txt">PlaceHolder</label>
            <br />
            <input
              class="field-input"
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
              type="text"
              name="PlaceHolder"
              value={element.PlaceHolder || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
<<<<<<< HEAD
            <label class="field-txt move-input-cf">Mandatory </label>
            <input class="field-input inl move-input-cf" type="checkbox"></input>
            <label class="field-txt move-input-cf">Field Type</label>
=======
            <label class="field-txt">Mandatory </label>
            <input class="field-input inl" type="checkbox"></input>
            <label class="field-txt">Field Type</label>
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
            <Dropdown
              action=""
              onChange={handleSelect}
            >
              <Option selected value="Click to see options" />
              <Option value="Single Choice" />
              <Option value="Multiple Choices" />
              <Option value="Text" />
              <Option value="Date" />
            </Dropdown>
<<<<<<< HEAD
            <label class="field-txt move-input-cf">Options</label>
            <Options/>
            <label class="field-txt move-input-cf">Document Keywords</label>
            <br />
            <input type="text" class=" field--keyword move-input-cf"></input>
=======
            <label class="field-txt">Options</label>
            <Options/>
            <label class="field-txt">Document Keywords</label>
            <br />
            <input type="text" class=" field--keyword"></input>
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
            <label></label>
            </DropdownMenu>
          </div>
        ))}
        <div className="button-section">
          <button id="btn" class="create-btn" onClick={() => addFormFields()}>
            Add new Field
          </button>
          <button id="btn" class="create-import">
            Import Field
          </button>
        </div>
      </form>
    </div>
  );
};
