import React from 'react'
import styled from 'styled-components';
import H6 from "./../../fonts/desktop/1920_h6"
import H4 from "./../../fonts/desktop/1920_h4"
import FontButton from "./../../fonts/desktop/1920_button"
import InfoTeacherCource from "./../../InfoTeacherCource"
import photo from "./../../../assets/teacher.jpg"
import crossExit from "./../../../assets/CrossExit.svg"
import Button from "./../../Button"
import DarkenedBackground from '../../DarkenedBackground';

const Container = styled.div`
                z-index: 1;
                position: fixed;
                top: 10%;
                left: 50%;
                margin-left: -350px;
                width: 700px;
                border-radius: 50px;
                background: #ffff;
                display: grid;
                padding: 64px 32px;
                grid-template-columns: auto;
                grid-template-rows: auto auto auto auto auto;
                grid-template-areas:
                    "InformationRecording"
                    "InfoTeacherCource"
                    "selectionField"
                    "button";

            `;

const StyledInfoTeacherCource = styled(InfoTeacherCource)`
            grid-area: InfoTeacherCource;
            margin: 48px 0 38px 0;
            `;

const InformationRecording = styled.div`
            grid-area: InformationRecording;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--srt, #E4E4E7);
            display: flex;
            align-items: center;
            gap: 10px;
            `;

const ContainerButton = styled.div`
                grid-area: button;
                align-self: start;
                margin-top: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            `;

const DateTimeRecord = styled.div`
                gap: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            `;



// вынести в компонент
const CrossExit = styled.img`
width: 80px;
height: 80px;
position: absolute;
right: -40px;
top: -80px;
cursor: pointer;
`;



const SelectionField = styled.div`
    grid-area: selectionField;
    padding-left: 14px;
    display: flex;
    align-items: center;
    gap: 38px;
`;

const Radio = styled.input`
    transform: scale(2.85);
`;

const Radiocell = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    
`;


export default function MarkVisit({ handler }) {
    return (
        <>
            <DarkenedBackground>
                <Container>
                    <CrossExit src={crossExit} onClick={handler} />

                    <InformationRecording>
                        <DateTimeRecord>
                            <H4 violet>13 марта</H4>
                            <H4 violet>16:00</H4>
                            <H6>Учёбное занятие</H6>
                        </DateTimeRecord>
                    </InformationRecording>

                    <StyledInfoTeacherCource teacherName="Зубенко Михаил Петрович" nameCourse="Пивоварение" srcTeacher={photo} />

                    <SelectionField>
                        <Radiocell>
                            <Radio type="checkbox" />
                            <FontButton color="black">Был</FontButton>
                        </Radiocell>
                        <Radiocell>
                            <Radio type="checkbox" />
                            <FontButton color="black">Не был</FontButton>
                        </Radiocell>
                    </SelectionField>

                    <ContainerButton>
                        <Button title="Отметить" handler={handler} />
                    </ContainerButton>

                </Container>
            </DarkenedBackground>
        </>
    )
}
