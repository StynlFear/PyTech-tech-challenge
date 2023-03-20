import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./styled.jsx";

export function Dropdown(props) {
  return (
    <div className="move-input-cf">
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
    </div>
  );
}

export function Option(props) {
  
  return <div className="move-input-cf"><StyledOption selected={props.selected}>{props.value}</StyledOption>;</div>
}
