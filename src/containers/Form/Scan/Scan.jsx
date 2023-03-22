import React, { useState } from "react";
import { DocumentAnalysisClient } from "@azure/ai-form-recognizer";
import { DefaultAzureCredential } from "@azure/identity";

const AnalyzeIdCard = () => {
  const [recognizedText, setRecognizedText] = useState(null);

  const analyzeIdCard = async () => {
    try {
      const credential = new DefaultAzureCredential();
      const client = new DocumentAnalysisClient(
        "https://Pytech-TechChallenge-Scan.cognitiveservices.azure.com",
        credential
      );

      const file = document.getElementById("id-card-file").files[0];
      if (!file) {
        alert("Please select an image of your Romanian ID card.");
        return;
      }

      const poller = await client.beginAnalyzeDocument("<model ID>", file, {
        contentType: "image/jpeg",
        onProgress: (state) => {
          console.log(`Status: ${state.status}`);
        }
      });

      const result = await poller.pollUntilDone();
      const idCard = result?.documents?.[0];

      if (!idCard) {
        alert("Could not recognize the ID card. Please try again.");
        return;
      }

      const fields = idCard.fields;
      const recognizedText = `${fields["CNP"].value} ${fields["Nume"].value} ${fields["Prenume"].value}`;
      setRecognizedText(recognizedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" id="id-card-file" accept=".jpg" />
      <button onClick={analyzeIdCard}>Analyze ID Card</button>
      {recognizedText && <div>{recognizedText}</div>}
    </div>
  );
};

export default AnalyzeIdCard;