import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: ${(props) => props.width == 0 ? "455px" : props.width};
padding: 14px 28px 16px 28px;
border-radius: 30px;
border: none;
background-color: #EFEEF4;
font-family: "Montserrat-Medium-500";
font-size: 24px;
@media (max-width: 768px) {
  font-size: 18px;
  padding: 16px 24px;
}
font-style: normal;
font-weight: 500;
line-height: normal;
/* color: #BCBCC5; ??? */
outline:none;
`;

export default function InputText({placeholder = null, password = null, value = null, width = null }) {
  // value={value} как то добавить надо
  // onChange={(event)=>this.inputChangedHandler(event)}
  return <Input width={width} placeholder={placeholder} type={(+password) ? "password" : "text"}  />
}
