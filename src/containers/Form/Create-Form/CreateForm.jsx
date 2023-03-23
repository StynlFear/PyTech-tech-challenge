import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import TextFileUploader from './File Uploader';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const TextEditor = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [updatedContent,setUpdate] = useState("");
  const [fileData, setFileData] = useState(null);

  const handleEditorChange = (content, editor,updatedContent) => {
    updatedContent = content.replace('{name}', name);
    updatedContent = updatedContent.replace(/<\/?[^>]+(>|$)/g, "");
    updatedContent = updatedContent.replace(/&nbsp;/g, " ");
    updatedContent = updatedContent.replace(/&hellip;/g, "...");
    updatedContent = updatedContent.replace(/&icirc;/g, "î");
    updatedContent = updatedContent.replace(/&acirc;/g, "â");
    setUpdate(updatedContent);
    console.log(updatedContent)
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDataFromChild = ( data ) =>{
    setFileData(data);
  }

  const generatePdf = () => {
    const docDefinition = {
      content: [
        { text: 'Updated Content:', style: 'header' },
        { text: updatedContent, style: 'content' }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [20, 0, 0, 10]
        },
        content: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
    };
    
    pdfMake.createPdf(docDefinition).download('updated_content.pdf');
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />

      <Editor
        initialValue={`Subsemnatul................angajat al................in functia de..............., solicit efectuarea unui numar de .............. zile de concediu de odihna in perioada ............. -
        ...............
        <br>Mentionez ca am facut pregatirile necesare pentru continuarea corespunzatoare a activitatii in
        lipsa mea.
        
        <br><br><br><br><br><br><br>Data................`}
        apiKey="YOUR_API_KEY"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={generatePdf}>Submit</button>
      <TextFileUploader setFileData = {handleDataFromChild} />
    </div>
  );
};

export default TextEditor;