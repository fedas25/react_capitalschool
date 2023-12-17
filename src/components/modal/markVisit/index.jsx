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
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
                z-index: 1;
                position: fixed;
                border-radius: 50px;
                background-color: #fff;
                @media (min-width: 768px) {
                    top: 10%;
                    left: 50%;
                    margin-left: -350px;
                    width: 700px;
                }
                @media (max-width: 768px) {
                    padding: 40px 24px;
                    width: 100vw;
                    bottom: 0px;
                    border-radius: 40px 40px 0px 0px;
                }
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
            @media (max-width: 768px) {
                margin: 32px 0;
            }
            `;

const InformationRecording = styled.div`
            grid-area: InformationRecording;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--srt, #E4E4E7);
            display: flex;
            align-items: center;
            gap: 10px;
            @media (max-width: 768px) {
                flex-direction: column;
                border-bottom: none;
                align-items: start;
            }
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
@media (max-width: 768px) {
    width: 48px;
    height: 48px;
    right: 0px;
    top: -56px;
}
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
    @media (max-width: 768px) {
        transform: scale(2.48);
    }
`;

const Radiocell = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    @media (max-width: 768px) {
        gap: 20px;
    }
`;


export default function MarkVisit({ handler }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <DarkenedBackground>
                <Container>
                    <CrossExit src={crossExit} onClick={handler} />

                    <InformationRecording>
                        <DateTimeRecord>
                            <H4 violet>13 марта</H4>
                            <H4 violet>16:00</H4>
                            {!isMobile ? <H6>Учёбное занятие</H6> : null}
                        </DateTimeRecord>
                        {isMobile ? <H6>Учёбное занятие</H6> : null}
                    </InformationRecording>

                    <StyledInfoTeacherCource payment mark
                        teacherName="Зубенко Михаил Петрович"
                        nameCourse="Пивоварение"
                        srcTeacher={photo}
                    />

                    <SelectionField>
                        <Radiocell>
                            <Radio type="checkbox" />
                            <FontButton test color="black">Был</FontButton>
                        </Radiocell>
                        <Radiocell>
                            <Radio type="checkbox" />
                            <FontButton test color="black">Не был</FontButton>
                        </Radiocell>
                    </SelectionField>

                    <ContainerButton>
                        <Button authoriz title="Отметить" handler={handler} />
                    </ContainerButton>

                </Container>
            </DarkenedBackground>
        </>
    )
}
