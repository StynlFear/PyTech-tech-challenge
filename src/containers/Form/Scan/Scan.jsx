import React, { useState } from "react";
import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";

function Scanner() {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const analyzeDocument = async () => {
    const endpoint = "https://pytechscannerstynlfear.cognitiveservices.azure.com/";
    const credential = new AzureKeyCredential("1ef757a844874e3f812161e6cd433a9f");    
    const client = new DocumentAnalysisClient(endpoint, credential);
    const modelId = "Pytech-ID";

    try {
      const poller = await client.beginAnalyzeDocument(
        modelId,
        selectedFile
      );

      const {
        documents: [document],
      } = await poller.pollUntilDone();

      if (!document) {
        throw new Error("Expected at least one document in the result.");
      }

      setResult(document);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={analyzeDocument}>Analyze Document</button>
      {result && (
        <div>
          <h3>Extracted document:</h3>
          <p>Document type: {result.docType}</p>
          <p>Confidence: {result.confidence || "<undefined>"}</p>
          <h3>Fields: {result.Nume}</h3>
          <ul>
            {Object.keys(result.fields).map((fieldName) => (
              <li key={fieldName}>
                {fieldName}: {result.fields[fieldName].text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Scanner;