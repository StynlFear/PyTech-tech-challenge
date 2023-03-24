import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./odihna.css"
import OdihnaEditor from "./Odihna-Editor";
export default function Odihna() {

  return (
    <div>
        <div style={{backgroundColor: '#DBEBFF', height: '300vh'}}>
        <Sidebar/>
        <div className="od-t1">Intelligent Forms</div>
        <div className="od-t2">Form</div>
        <div className="od-t3">Cerere pentru concediu de odihna</div>
        <div className="od-cont1">
            <div className="od-cont-t1">Section 1</div>
            <hr className="od-bara"/>
            <form action="">
                
                
            </form>
            <OdihnaEditor/>
            <div className="od-cont2"></div>
        </div>
        </div>
    </div>
  );
}