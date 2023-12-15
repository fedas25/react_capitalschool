import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"
import H4 from "../../fonts/desktop/1920_h4"
import InputText from '../../Form/InputText';
import Button from "../../Button"
import MainContainer from './MainContainer';
import CrossExit from './CrossExit';

const Containerr = styled.div`
  width: 100%;
  margin-bottom: 64px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;

function TypeSelection() {
  return (
    <Containerr>
      <H4 question gray>Регистрация</H4>
      <H4 question violet>Авторизация</H4>
    </Containerr>
  )
}

const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 47px;
`;

export default function SetPassword({handlerButton}) {
  return (
    <MainContainer>
      <CrossExit handler={handlerButton} />
      <TypeSelection />
      <ContainerInputs>
        <InputText placeholder="Введите новый пароль" width="100%" />
      </ContainerInputs>
      <Button authoriz title="Изменить пароль" handler={handlerButton}/>
    </MainContainer>
  )
}
