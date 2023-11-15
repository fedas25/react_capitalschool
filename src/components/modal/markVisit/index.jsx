import React, { useState } from 'react'
import styled from 'styled-components'

import InfoTeacherCource from "./../../InfoTeacherCource"
import crossExit from "./../../../assets/CrossExit.svg"
import teacher from "./../../../assets/teacher.jpg"
import H6 from "./../../fonts/desktop/1920_h6"
import H4 from "./../../fonts/desktop/1920_h4"
import FontButton from "./../../fonts/desktop/1920_button"
import Button from "./../../Button"

const Container = styled.div`
position: fixed;
top: 10%;
left: 50%;
border: 1px solid gray;
margin-left: -344px;
width: 788px;
border-radius: 50px;
background: #ffff;
display: grid;
padding: 64px 32px;
grid-template-columns: auto;
grid-template-rows: auto auto auto auto;
grid-template-areas:
    "InformationRecording"
    "infoTeacherCource"
    "workingArea"
    "button"
    ;
`;

// вынести
// во всех модалках используется
const CrossExit = styled.img`
width: 80px;
height: 80px;
position: absolute;
right: -40px;
top: -80px;
cursor: pointer;
`;

const StyledInfoTeacherCource = styled(InfoTeacherCource)`
grid-area: infoTeacherCource;
margin-bottom: 32px;
`;


// вынести
const InformationRecording = styled.div`
grid-area: InformationRecording;
padding-bottom: 44px;
display: flex;
align-items: center;
gap: 24px;
`;

const DateTimeRecord = styled.div`
gap: 12px;
display: flex;
justify-content: center;
align-items: center;
`;



// ну это точно выносить
// в 3 компонентах по меньшей мере используется

const Type = styled.div`
    grid-area: workingArea;
    display: flex;
    align-items: center;
    padding-left: 15.6px;
    margin-bottom: 48px;
    gap: 35px;
    
`;

const Radio = styled.input`
    transform: scale(2.4);
`;

const Radiocell = styled.div`
    /* width: 220px; */
    display: flex;
    align-items: center;
    gap: 28px;
`;

const StyledButton = styled(Button)`
    grid-area: button;
    justify-self: center;
`;

export default function MarkVisit() {
    return (
        <Container>
            <CrossExit src={crossExit} />

            <InformationRecording>
                <DateTimeRecord>
                    <H4 violet>13 марта</H4>
                    <H4 violet>16:00</H4>
                </DateTimeRecord>
                <H6>Учёбное занятие</H6>
            </InformationRecording>

            <StyledInfoTeacherCource teacherName="Гай Юлий Цезарь" nameCourse="Военное дело" srcTeacher={teacher} />

            <Type>
                <Radiocell>
                    <Radio type="checkbox" />
                    <FontButton color="black">Был</FontButton>
                </Radiocell>
                <Radiocell>
                    <Radio type="checkbox" />
                    <FontButton color="black">Пропустил</FontButton>
                </Radiocell>
            </Type>
                <StyledButton title="Отметить" />
        </Container>
    )
}
