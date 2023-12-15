import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"
import H4 from "../../fonts/desktop/1920_h4"
import InputText from '../../Form/InputText';
import Button from "../../Button"
import MainContainer from './MainContainer';
import CrossExit from './CrossExit';

const ContainerTypeSelection = styled.div`
  width: 100%;
  margin-bottom: 64px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;
// вынести !!!
function TypeSelection() {
  return (
    <ContainerTypeSelection>
      <H4 violet question>Регистрация</H4>
      <H4 gray question>Авторизация</H4>
    </ContainerTypeSelection>
  )
}



const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 47px;
`;

export default function GetCode({ handlerButton, handlerExit }) {
  return (
    <MainContainer>
      <CrossExit handler={handlerExit}/>
      <TypeSelection />
      <ContainerInputs>
        <InputText placeholder="Введите код подтверждения" width="100%" />
      </ContainerInputs>
      <Button title="Отправить" handler={handlerButton} />
    </MainContainer>
  )
}
