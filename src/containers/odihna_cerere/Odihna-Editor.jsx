import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Outlet, Link } from "react-router-dom";
import "./odihna.css"
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const OdihnaEditor = () => {
  const [name, setName] = useState('');
  const [firma, setFirma] = useState('');
  const [functie, setFunctie] = useState('');
  const [numzile, setNrzile] = useState('');
  const [perioada, setPerioada] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [updatedContent,setUpdate] = useState("");
  const [fileData, setFileData] = useState(null);

  const handleEditorChange = (content, editor,updatedContent) => {
    updatedContent = content.replace('{nume}', name);
    updatedContent = updatedContent.replace('{firma}', firma);
    updatedContent = updatedContent.replace('{functie}', functie);
    updatedContent = updatedContent.replace('{numzile}', numzile);
    updatedContent = updatedContent.replace('{perioada}', perioada);
    updatedContent = updatedContent.replace('{date}', date);
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
  const handleFirmaChange = (event) => {
    setFirma(event.target.value);
  };
  const handlefunctieChange = (event) => {
    setFunctie(event.target.value);
  };
  const handlenrzileChange = (event) => {
    setNrzile(event.target.value);
  };
  const handleperioadaChange = (event) => {
    setPerioada(event.target.value);
  };
  const handledateChange = (event) => {
    setDate(event.target.value);
  };
  

  const generatePdf = () => {
    const docDefinition = {
      content: [
        { text: 'Cerere concediu de odihna', style: 'header' },
        { text: updatedContent, style: 'content' }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [120, 0, 0, 10]
        },
        content: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
     
    };
    
    pdfMake.createPdf(docDefinition).download('cerere_concediu_odihna.pdf');
  };

  return (
    <div>
      <div className='od-inp23'>
        <label className="labels-od1">NUME</label>
      <input type="text" className='input-od' value={name} onChange={handleNameChange} />
      <br/>
      <label className="labels-od1">FIRMA</label>
      <input type="text" className='input-od' value={firma} onChange={handleFirmaChange} />
      <br/>
      <label className="labels-od1">FUNCTIE</label>
      <input type="text" className='input-od' value={functie} onChange={handlefunctieChange} />
      <br/>
      <label className="labels-od1">NR ZILE</label>
      <input type="text" className='input-od' value={numzile} onChange={handlenrzileChange} />
      <br/>
      <label className="labels-od1">PERIOADA</label>
      <input type="text" className='input-od' value={perioada} onChange={handleperioadaChange} />
      <br/>
      <label className="labels-od1">DATA</label>
      <input type="text" className='input-od' value={date} onChange={handledateChange} />
      </div>
      <div className='text-side-od'>
      <Editor
        initialValue={`Subsemnatul {nume} angajat al {firma} in functia de {functie}, solicit efectuarea unui numar de {numzile} zile de concediu de odihna in perioada {perioada} -
        
        <br>Mentionez ca am facut pregatirile necesare pentru continuarea corespunzatoare a activitatii in
        lipsa mea.
       
        <br><br><br><br><br><br><br>Data {date}`}
        apiKey="YOUR_API_KEY"
        init={{
          height: 500,
          width:600,
          menubar: false,
          statusbar: false,
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
      </div>
        <router> <Link to="/generate">
      <button onClick={generatePdf} className="Sub-od">Submit</button>
      </Link>
      </router>
    </div>
  );
};

export default OdihnaEditor;