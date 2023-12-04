import React, { useState } from 'react';
import styled, { keyframes } from "styled-components"
import crossExit from "./../../../assets/CrossExit.svg"
import H4 from "../../fonts/desktop/1920_h4"
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

function TypeSelection() {
  return (
    <Containerr>
      <H4 gray>Регистрация</H4>
      <H4 violet>Авторизация</H4>
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
margin-bottom: 47px;
`;

export default function GetCode({handlerButton}) {
  return (
    <Container>
      <CrossExit src={crossExit} />
      <TypeSelection />
      <ContainerInputs>
        <InputText placeholder="Email" width="100%" />
      </ContainerInputs>
      <Button title="Получить код подтверждения" handler={handlerButton}/>
    </Container>
  )
}
