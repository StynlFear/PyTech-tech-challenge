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
                <label className="labels-od1">NUME</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">FIRMA</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">FUNCTIE</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">NUMAR DE ZILE</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">PERIOADA</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">DATA</label>
                <input type="text" className="input-od"/>
                <br />
                <button className="Sub-od">Submit</button>
            </form>
            <OdihnaEditor/>
            <div className="od-cont2"></div>
        </div>
        </div>
    </div>
  );
}