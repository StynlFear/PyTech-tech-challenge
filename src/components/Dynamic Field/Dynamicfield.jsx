import { useState } from "react";
import React from "react";
import { Dropdown, Option } from "../DropDown/DropDown.jsx";
import { DropdownMenu } from "../DropDownMenu/DropDownMenu.jsx";
import { Options } from "../Options/Options.jsx";
import Delsecpop from "../delete_section/delsecpop.jsx";
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
    const formData = formValues.map(field => {
      const { DynamicField, Label, PlaceHolder, FieldType, Mandatory, Options, DocumentKeywords } = field;
      return { DynamicField, Label, PlaceHolder, FieldType, Mandatory, Options, DocumentKeywords };
    });
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <DropdownMenu>
            {index ? (
  <>
    <i
      class="fa fa-trash delete"
      onClick={() => setShowPopup(true)}
    />
    {showPopup && (
      <Delsecpop onClose={() => setShowPopup(false)}>
        {/* Put your popup content here */}
      </Delsecpop>
    )}
  </>
) : null}
            <label class="field-txt">Dynamic Field Name </label>
            <br />
            <input
              class="field-input"
              type="text"
              name="DynamicField"
              value={element.DynamicField || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
            <label class="field-txt">Label</label>
            <br />
            <input
              class="field-input"
              type="text"
              name="Label"
              value={element.Label || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
            <label class="field-txt">PlaceHolder</label>
            <br />
            <input
              class="field-input"
              type="text"
              name="PlaceHolder"
              value={element.PlaceHolder || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <br />
            <label class="field-txt">Mandatory </label>
            <br/><br/>
            <input class="field-input inl check-dyn" type="checkbox"></input>
            <label class="field-txt">Field Type</label>
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
            <label class="field-txt">Options</label>
            <Options/>
            <label class="field-txt">Document Keywords</label>
            <br />
            <input type="text" class=" field--keyword"></input>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
