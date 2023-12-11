import React from "react";
import styled from "styled-components";
import Font1920_p1 from "./fonts/desktop/1920_p1"
import telegramm from "./../assets/telegramm.png"
import whatsapp from "./../assets/whatsapp.png"
import vk from "./../assets/vk.png"
import word from "./../assets/word.jpg"

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  padding-bottom: 72px;
  background: #6B73C2;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1664px;
  @media (max-width: 768px) {
    width: 320px;
  }
  gap: 64px;
`;

const Wordsimg = styled.img`
  height: 807px;
  width: 1664px;
  @media (max-width: 768px) {
    width: 320px;
  }
  border-bottom: 2px solid rgba(255, 255, 255, 0.50);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 48px;
`;

const Icon = styled.img`
  width: 96px;
  height: 96px;
  cursor: pointer;
`

const ContainerIcons = styled.div`
  display: flex;
  gap: 18px;
`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <Wordsimg src={word} />
        <Info>
          <CompanyInformation>
            <Font1920_p1>ООО «Lorem ipsum»</Font1920_p1>
            <Font1920_p1>ИНН: 7724462764</Font1920_p1>
            <Font1920_p1>ОГРН: 1197746013101</Font1920_p1>
          </CompanyInformation>
          <ContactInformation>
            <Font1920_p1>+7 499 727-38-38 / info@fitsharing.ru</Font1920_p1>
            <ContainerIcons>
              <Icon src={whatsapp} alt="whatsapp" />
              <Icon src={vk} alt="vk" />
              <Icon src={telegramm} alt="telegramm" />
            </ContainerIcons>
          </ContactInformation>
        </Info>
      </Content>
    </Container>
  )
}
