import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"
import H4 from "../../fonts/desktop/1920_h4"
import InputText from '../../Form/InputText'
import Button from "../../Button"
import MainContainer from './MainContainer';
import CrossExit from './CrossExit';

const Container = styled.div`
  width: 100%;
  margin-bottom: 64px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;

// вынести TypeSelection !!!

function TypeSelection({ handlerNav }) {
  return (
    <Container>
      <Pointer> <H4 question violet handler={handlerNav.SetRegistrition}>Регистрация</H4> </Pointer>
      <Pointer> <H4 question gray handler={handlerNav.SetAutorisition}>Авторизация</H4> </Pointer>
    </Container>
  )
}

// вынести
const Pointer = styled.span`
  cursor: pointer;
`;


// вынести
const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 47px;
`;

export default function Registration({ handlerButton, handlerNav, handlerExit }) {
  return (
    <MainContainer>
      <CrossExit handler={handlerExit} />
      <TypeSelection handlerNav={handlerNav} />
      <ContainerInputs>
        <InputText placeholder="Имя" width="100%" />
        <InputText placeholder="Фамилия" width="100%" />
        <InputText placeholder="Отчество" width="100%" />
      </ContainerInputs>
      <Button handler={handlerButton} title="Зарегестрироваться" />
    </MainContainer>
  )
}
