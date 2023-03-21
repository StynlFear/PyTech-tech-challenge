import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./GenerateQr.css"
function GenerateQRCode() {
  const [url, setUrl] = useState('');
  const qrCodeRef = useRef(null);

  function handleChange(event) {
    setUrl(event.target.value);
  }

  function handleDownload() {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <div className="qr-cont"></div>
      <div style={{backgroundColor: '#DBEBFF', height: '100vh'}}>
        <h1 className='gq-t1'>Generate QR code</h1>
        <h1 className='gq-t2'>Download QR code</h1>
        <h2 className='gq-t3'>Download QR code created for your link</h2>
        <p className='gq-t4'>Link to share</p>
        <Sidebar/>
      <input type="text " className='inp-gq' value={url} onChange={handleChange} />
      
        <div className='qr-code-p '>
          <QRCode value={url} ref={qrCodeRef} />
        </div>
   
      <button onClick={handleDownload} className="qr-btn-d">Download</button>
      </div>
    </div>
  );
}

export default GenerateQRCode;