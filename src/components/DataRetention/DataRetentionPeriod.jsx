import { useState } from "react";
import React from "react";
import { Dropdown, Option } from "../DropDown/DropDown.jsx";
import { DropdownMenuSec } from "../DropDownMenu/DropDownButton.jsx";
import { SectionEditor } from "../Editor/Editor.jsx";
// CSS IMPORT
import "../../containers/Create Form/CreateForm.css";
export const Data = () => {
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
              <label class="field-txt">Choose Document Type</label>
              <Dropdown
              action=""
              onChange={handleSelect}
            >
              <Option selected value="Choose the day" />
              <Option value="1 day" />
              <Option value="5 days" />
              <Option value="7 days" />
              <Option value="10 days" />
              <Option value="15 days" />
              <Option value="30 days" />
            </Dropdown>
      </form>
    </div>
  );
};
