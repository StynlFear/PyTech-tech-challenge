import { useState } from "react";
import React from "react";
import { Dropdown, Option } from "../DropDown/DropDown.jsx";
import { DropdownMenuSec } from "../DropDownMenu/DropDownButton.jsx";
import { SectionEditor } from "../Editor/Editor.jsx";
// CSS IMPORT
import "../../containers/Create Form/CreateForm.css";
export const Sections = () => {
  const [formValues, setFormValues] = useState([
    { TitleSection: "", Content: "" },
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
    setFormValues([...formValues, { TitleSection: "" ,Content: ""}]);
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
            <DropdownMenuSec>
              {index ? (
                <i
                  class="fa fa-trash delete"
                  onClick={() => removeFormFields(index)}
                />
              ) : null}
              <label class="field-txt">Section Title</label>
              <br />
              <input
                class="field-input"
                type="text"
                name="TitleSection"
                value={element.TitleSection || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <br />
              <label class="field-txt">Content</label>
              <br />
              <label></label>
              <SectionEditor
                value={element.Content || ""}
                onEditorChange={(e) => handleChange(index, e)}
              />
              <br />
              <label class="field-txt">Choose Document Type</label>
              <Dropdown
              action=""
              onChange={handleSelect}
            >
              <Option selected value="Click to see options" />
              <Option value="ID" />
              <Option value="Driver's Licence" />
              <Option value="Car's Manual" />
              <Option value="Data" />
            </Dropdown>
            </DropdownMenuSec>
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
