import React, { useState } from "react";

export default function Attention() {
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
          <div className="modal-content1">
            <img className="img-a" src="./src/images/Attention.png" alt="idk" width="400px" />
            <div className="at-t1">Attention!</div>
            <div className="at-t2">Once this form is deleted,  all submissions stored for this form will also be deleted.Are you sure you want to delete this form? </div>
            <button className="close-modal-a" onClick={toggleModal}>Cancel</button>
            <button className="delete-dynamic-field-a">Delete field</button>
          </div>
        </div>
      )}
      <p>Lorem </p>
    </>
  );
}