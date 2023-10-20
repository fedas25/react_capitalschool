import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: 455px;
padding: 14px 28px 16px 28px;
border-radius: 30px;
border: none;
background-color: #EFEEF4;
font-family: "Montserrat-Medium-500";
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: #BCBCC5;
outline:none;
`;

export default function InputText({placeholder, password, value }) {
  return <Input placeholder={placeholder} value={value} type={(+password) ? "password" : "text"} onChange={(event)=>this.inputChangedHandler(event)} />
}
