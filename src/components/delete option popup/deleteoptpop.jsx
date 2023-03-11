import React, { useState } from "react";

export default function Deloppop() {
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
          <div className="modal-content">
            <img  src="./src/images/popup.png" alt="idk" width="400px" />
            <div className="message1_delop">Delete option?</div>
            <div className="message2">You’ll permanently lose your option "name of field" from your list. </div>
            <button className="close-modal" onClick={toggleModal}>Cancel</button>
            <button className="delete-dynamic-field">Delete field</button>
          </div>
        </div>
      )}
      <p>Lorem </p>
    </>
  );
}