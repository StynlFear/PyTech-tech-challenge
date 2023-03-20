import React, { useState } from "react";

export default function Generateurl() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content-generate">
            <img  src="./src/images/generate.png" alt="idk" width="400px" />
           
            <div className="generate-m">You want to generate a URL for this form? </div>
            <button className="close-modal-g" onClick={toggleModal}>Cancel</button>
            <button className="generate-url-b">Generate</button>
          </div>
        </div>
      )}
      <p>Lorem </p>
    </>
  );
}