import styled from "styled-components";
export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
export const StyledSelect = styled.select`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;

width: 702px;
height: 42px;

background: #EFF6FF;
/* Blue 3 */

border: 1px solid #8595B0;
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;
