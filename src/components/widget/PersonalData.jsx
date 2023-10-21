import React from 'react'
import styled from 'styled-components'
import H2 from "../fonts/desktop/1920_h2"
import H5 from "../fonts/desktop/1920_h5"
import Font1920_h6 from "../fonts/desktop/1920_h6"
import avatar from "./../../assets/avatar.svg"
import InputText from '../Form/InputText'
import BadgeCource from '../BadgeCource'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 1664px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
`;

const Description = styled.p`
    max-width: 1664px;
    font-size: 65px;
    color: black;
`;

const Data = styled.div`
    display: flex;
    padding: 64px 0px;
    align-items: flex-start;
    align-content: flex-start;

`;

function Avatar({ className }) {
    return (
        <div className={className}>
            <img src={avatar} alt="avatar" />
        </div>
    )
};

const StyledAvatar = styled(Avatar)`
display: flex;
width: 258px;
height: 366px;
justify-content: center;
align-items: center;
border-radius: 30px;
background-color: #BCBCC5;
`;

const ContainerAuthentication = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`;

function Authentication({ className }) {
    return (
        <div className={className}>
            <H5>Личные данные</H5>
            <ContainerAuthentication>
                <InputText password value="123456" />
                <InputText value="uasily.lol@yandex.ru" />
            </ContainerAuthentication>
        </div>
    )
};

const StyledAuthentication = styled(Authentication)`
display: flex;
width: 455px;
flex-direction: column;
align-items: flex-start;
gap: 32px;
margin-left: 24px;
`;

const ContainerInputsFullName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`;

function FullName({ className }) {
    return (
        <div className={className}>
            <H5>ФИО</H5>
            <ContainerInputsFullName>
                <InputText placeholder='Фамилия' />
                <InputText placeholder='Имя' />
                <InputText placeholder='Отчество' />
            </ContainerInputsFullName>
        </div>
    )
};

const StyledFullName = styled(FullName)`
display: flex;
width: 455px;
flex-direction: column;
align-items: flex-start;
gap: 32px;
margin-left: 48px;
`;

const DivFlexColum = styled.div`
   display: flex;
   flex-direction: column;
   gap: 64px;
   `

const DivFlex = styled.div`
   display: flex;
`

const ListСourses = styled.div`
   display: flex;
   gap: 12px;
`

function MyСourses({ className }) {
    return (
        <div className={className}>
            <H5>Курсы</H5>
            <ListСourses>
                <BadgeCource>
                    <Font1920_h6 white>ООО</Font1920_h6>
                </BadgeCource>
                <BadgeCource>
                    <Font1920_h6 white>ОГО</Font1920_h6>
                </BadgeCource>
                <BadgeCource>
                    <Font1920_h6 white>АГА</Font1920_h6>
                </BadgeCource>
            </ListСourses>
        </div>
    )
};

const StyledMyСourses = styled(MyСourses)`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-left: 48px;
`

export default function PersonalData({teacher}) {
    return (
        <Container>
            <Content>
                <Description>
                    <H2>Личный кабинет</H2>
                </Description>
                <Data>
                    <StyledAvatar />
                    <DivFlexColum>
                        <DivFlex>
                            <StyledFullName />
                            <StyledAuthentication />
                        </DivFlex>
                        {teacher && <StyledMyСourses/>}
                    </DivFlexColum>
                </Data>
            </Content>
        </Container>
    )
}
