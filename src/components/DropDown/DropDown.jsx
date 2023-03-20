import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./styled.jsx";

export function Dropdown(props) {
  return (
<<<<<<< HEAD
    <div className="move-input-cf">
=======
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
<<<<<<< HEAD
    </div>
=======
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
  );
}

export function Option(props) {
<<<<<<< HEAD
  
  return <div className="move-input-cf"><StyledOption selected={props.selected}>{props.value}</StyledOption>;</div>
=======
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
>>>>>>> 42e5246eb4f9dc409f6a58974d20dc084f077283
}
