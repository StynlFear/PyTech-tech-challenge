import { useState } from "react";
import React from "react";
function DropdownMenu(props) {
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
      <div style={{ display: display }}>
        {props.children}
        </div>
    </div>
  );
}

export { DropdownMenu };
