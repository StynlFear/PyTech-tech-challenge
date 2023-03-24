import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../modal del dinam fields/modal.css"
export default function Generateurl() {
  const [modal, setModal] = useState(true);

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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content-generate">
            <img className="img-url"  src="./src/images/generate.png" alt="idk" width="400px" />
           
            <div className="generate-m">You want to generate a URL for this form? </div>
            <router>
            <Link to="/CreateForm">
            <button className="close-modal-g" onClick={toggleModal}>Cancel</button>
            </Link>
            </router>
            <router>
            <Link to="/Odihna">
            <button className="generate-url-b">Generate</button>
            </Link>
            </router>
          </div>
        </div>
      )}
    </>
  );
}