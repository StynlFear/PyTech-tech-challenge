import React, { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scan/Scan";
function Cerere() {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFormId, setSelectedFormId] = useState(null);

  useEffect(() => {
    axios.get("https://api-user-forms.herokuapp.com/v1/forms/")
      .then((response) => {
        setFormData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  console.log("formData:", formData);
  console.log("isLoading:", isLoading);

  const handleSelectForm = (id) => {
    setSelectedFormId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  if (isLoading) {
    return <div>Loading form...</div>;
  }

  if (formData.length === 0) {
    return <div>No form data available</div>;
  }

  // Filter the formData array based on the selectedFormId
  const selectedForm = formData.find((form) => form._id === selectedFormId);

  return (
    <div>
      <div>
        {/* Render a list of forms with buttons to select each form */}
        {formData.map((form) => (
          <button key={form._id} onClick={() => handleSelectForm(form._id)}>
            {form.title}
          </button>
        ))}
      </div>
      {selectedForm && (
        <div>
          <h2>{selectedForm.title}</h2>
          <form onSubmit={handleSubmit}>
            {/* Render the dynamic fields for the selected form */}
            {selectedForm.dynamic_fields.map((field) => (
              <div key={field._id}>
                <label htmlFor={field.dynamic_field_name}>{field.dynamic_field_name}</label>
                <br/>
                <input type="text" name={field.dynamic_field_name} placeholder={field.placeholder} required={field.mandatory} />
                <br/>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <h1>Analyze Romanian ID Card</h1>
          <Scanner/>
    </div>
  );
}

export default Cerere;