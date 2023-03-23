import React, { useState } from "react";

function TextFileUploader({ setFileData }) {
  const [fileContents, setFileContents] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContents(e.target.result);
      setFileData(e.target.result); // Pass the text content to the parent component
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default TextFileUploader;

