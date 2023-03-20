import { useState } from "react";
import React from "react";
 function DropdownMenuSec(props) {
  const [display, setDisplay] = useState("block");

  function handleClick() {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }
  return (
    <div>
      <h class="field-header" onClick={handleClick} >Section</h>
      
      <br />
            <hr class="divider" />
      <div style={{ display: display }}>
        {props.children}
        </div>
    </div>
  );
}

export { DropdownMenuSec };