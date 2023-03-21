import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import Sidebar from '../../components/sidebar/Sidebar';
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
        <h1>Generate Qr code</h1>
        <h1>Download Qr code</h1>
        <h2>Download qr code created for your link</h2>
        <p>Link to share</p>
        <Sidebar/>
      <input type="text" value={url} onChange={handleChange} />
      <QRCode value={url} ref={qrCodeRef} />
      <button onClick={handleDownload}>Download QR Code</button>
    </div>
  );
}

export default GenerateQRCode;