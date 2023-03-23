import React, { useState, useEffect } from "react";
import axios from "axios";
import Scanner from "./Scan/Scan";
import TextEditor from "./Create-Form/CreateForm";

function Cerere() {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFormId, setSelectedFormId] = useState(null);

  useEffect(() => {
    axios
      .get("https://api-user-forms.herokuapp.com/v1/forms/")
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
      
      <Scanner />
      <TextEditor/>
    </div>
  );
}

export default Cerere;