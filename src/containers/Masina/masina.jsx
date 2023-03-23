import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./masina.css"
export default function Masina() {

  return (
    <div>
        <div style={{backgroundColor: '#DBEBFF', height: '300vh'}}>
        <Sidebar/>
        <div className="od-t1">Intelligent Forms</div>
        <div className="od-t2">Form</div>
        <div className="od-t3">Cerere pentru matricularea vehiculului</div>
        <div className="masina-cont1">
            <div className="od-cont-t1">Section 1</div>
            <hr className="od-bara"/>
            <form action="">
                <label className="labels-od1">NUME</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">CNP</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">DOMICILIU</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">ADRESA</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">JUDET</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">EMAIL</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od1">TELEFON</label>
                <input type="text" className="input-od"/>
                <br />
                <div className="od-cont-t2">Section 2</div>
                <hr className="od-bara2"/>
                <label className="labels-od3">MARCA</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">TIP</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">NUMAR DE IDENTIFICARE</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">AN DE FABRICATIE</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">NUMAR DE MATRICULARE</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">PRIN</label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">DE LA </label>
                <input type="text" className="input-od"/>
                <br />
                <label className="labels-od2">DATA</label>
                <input type="text" className="input-od"/>
                <br />
             <button className="Sub-od1">Submit</button> 
            </form>
            <div className="od-cont2"></div>
        </div>
        </div>
    </div>
  );
}