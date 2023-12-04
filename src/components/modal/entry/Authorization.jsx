import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"
import crossExit from "./../../../assets/CrossExit.svg"
import H4 from "../../fonts/desktop/1920_h4"
import H5 from "../../fonts/desktop/1920_h5"
import InputText from '../../Form/InputText';
import Button from "../../Button"

const Containerr = styled.div`
  width: 100%;
  margin-bottom: 64px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;

const Pointer = styled.span`
cursor: pointer;
`;

function TypeSelection({handlerNav}) {
  return (
    <Containerr>
      <Pointer> <H4 gray handler={handlerNav.SetRegistrition}>Регистрация</H4> </Pointer>
      <Pointer> <H4 violet handler={handlerNav.SetAutorisition}>Авторизация</H4> </Pointer>
    </Containerr>
  )
}

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  border-radius: 50px;
  top:12%;
  left: 50%;
  margin-left: -325px;
  padding: 112px 32px 128px;
  z-index: 1;
`;

const CrossExit = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  right: -40px;
  top: -80px;
  cursor: pointer;
`;

const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 40px;
/* margin-bottom: 47px; */
`;

const ForgotPassword = styled.p`
  margin-top: 40px;
  cursor: pointer;
`

export default function Authoris({ handlerButton, handlerNav, handlerExit }) {
  return (
    <Container>
      <CrossExit src={crossExit} onClick={handlerExit}/>
      <TypeSelection handlerNav={handlerNav}/>
      <ContainerInputs>
        <InputText placeholder="Email" width="100%" />
        <InputText placeholder="Password" width="100%" />
      </ContainerInputs>
      <Button handler={handlerButton} title="Войти" />
      <ForgotPassword>
        <H5 violet handler={handlerButton}>Забыли пароль ?</H5>
      </ForgotPassword>
    </Container>
  )
}
