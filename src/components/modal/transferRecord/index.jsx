import React, { useState } from 'react'
import styled from 'styled-components';
import H6 from "./../../fonts/desktop/1920_h6"
import H5 from "./../../fonts/desktop/1920_h5"
import H4 from "./../../fonts/desktop/1920_h4"
import InfoTeacherCource from "./../../InfoTeacherCource"
import photo from "./../../../assets/teacher.jpg"
import crossExit from "./../../../assets/CrossExit.svg"
import arrowExit from "./../../../assets/arrowExit.svg"
import Button from "./../../Button"
import longArrow from "./../../../assets/longArrow.svg"
import Calendar from "./../../Calendar"
import DarkenedBackground from '../../DarkenedBackground';
import MobileCalendar from '../../MobileCalendar';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
                position: fixed;
                z-index: 1;
                width: 1630px;
                width: ${(props) => props.type === "resultRecord" ? "756px" : "1630px"};
                border-radius: 50px;
                background: #ffff;
                display: grid;
                padding: 64px 32px;
                @media (min-width: 768px) {
                    top: 10%;
                    left: 50%;
                    margin-left: -815px;
                }
                @media (max-width: 768px) {
                    width: 100vw;
	                padding: 40px 16px;
                    border-radius: 40px 40px 0px 0px;
                    bottom: 0px;
                }
                grid-template-columns: ${(props) => props.type === "resultRecord" ? "auto" : "auto auto"};
                grid-template-rows: auto auto auto auto auto;
                grid-template-areas:
                ${(props) => props.type === "resultRecord" ?
        `"typeRecord"
                    "InformationRecording"
                    "InfoTeacherCource"
                    "notification"` :

        `"typeRecord Calendar"
                    "InformationRecording Calendar"
                    "InfoTeacherCource Calendar"
                    "TimeRecording Calendar"
                    "Button Calendar"
                    ". Calendar"`
    } ;
            `;

const StyledCalendar = styled(Calendar)`
            grid-area: Calendar;
            justify-self: end;
            `;

const StyledInfoTeacherCource = styled(InfoTeacherCource)`
            grid-area: InfoTeacherCource;
            margin: 48px 0 21px 0;
            @media (max-width: 768px) {
                margin: 48px 0 40px 0;
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
                align-items: start;
                gap: 10px;
                border-bottom: none;
            }
            `;

const TimeRecording = styled.div`
            padding-top: 21px;
            grid-area: TimeRecording;
            display: flex;
            gap: 12px;
            @media (max-width: 768px) {
                padding-top: 0px;
            }
            `;

const ContainerButton = styled.div`
                grid-area: Button;
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

const TypeRecord = styled(H6)`
            grid-area: typeRecord;
            margin-bottom: 32px;
            @media (max-width: 768px) {
                margin-bottom: 24px;
                display: flex;
                flex-direction: column;
                gap: 48px;
            }
            `

const Notification = styled(H5)`
            grid-area: notification;
            display: block;
            margin-top: 21px;
            `


// вынести в компонент
const CrossExit = styled.img`
width: 80px;
height: 80px;
position: absolute;
right: -40px;
top: -80px;
cursor: pointer;
cursor: pointer;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    right: 0px;
    top: -56px;
}
`;



const TransferArrow = styled.img`
width: 64px;
height: 64px;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
}
`;

const ArrowExit = styled.img`
    width: 48px;
    height: 48px;
`;





export default function TransferRecord({ test, handler = () => { } }) {
    const [stage, setStage] = useState(0);

    function SetNextStage() {
        setStage(stage != 4 ? (stage + 1) : 0)
    }
    function SetPreviousStage() {
        setStage(stage - 1)
    }

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            {isMobile && (stage === 0) ?
                <MobileCalendar handlerDay={(date) => { console.log(date); setStage(1); }} />
                :
                <DarkenedBackground>
                    <Container type={stage === 3 ? "resultRecord" : ""}>
                        <CrossExit src={crossExit} onClick={handler} />
                        <TypeRecord>
                        {(isMobile &&  stage != 3) ? <ArrowExit src={arrowExit} onClick={SetPreviousStage}/> : null}
                            {test ? "Пробное" : "Учёбное"} занятие
                        </TypeRecord>

                        <InformationRecording>
                            <DateTimeRecord>
                                <H4 violet>13 марта</H4>
                                <H4 violet>16:00</H4>
                                {isMobile ? <TransferArrow src={longArrow} alt="tansferArrow" /> : null}
                            </DateTimeRecord>

                            {!isMobile ? <TransferArrow src={longArrow} alt="tansferArrow" /> : null}

                            <DateTimeRecord>
                                {stage === 2 || stage === 3 ? (
                                    <H4 violet>13 марта</H4>
                                ) : null}

                                {stage === 2 || stage === 3 ? (
                                    <H4 violet>16:00</H4>
                                ) : null}
                            </DateTimeRecord>

                        </InformationRecording>

                        <StyledInfoTeacherCource payment teacherName="Зубенко Михаил Петрович" nameCourse="Пивоварение" srcTeacher={photo} />

                        {(stage === 1 || stage === 2) ? (
                            <TimeRecording>
                                <H5 gray>13:00</H5>
                                <H5 gray>14:00</H5>

                                {stage === 2 ? (
                                    <H5>15:00</H5>
                                ) : stage === 1 ? (
                                    <H5 gray handler={SetNextStage}>16:00</H5>
                                ) : null}

                            </TimeRecording>
                        ) : null}

                        {stage === 2 ? (
                            <ContainerButton>
                                <Button test handler={SetNextStage} title="Перенести" />
                            </ContainerButton>
                        ) : null}

                        {stage === 3 ? (
                            <Notification gray>
                                Запись успешно перенесена
                            </Notification>
                        ) : null}

                        {!isMobile ?
                            <>
                                {stage != 3 ? (
                                    <StyledCalendar type="record" handlerDay={SetNextStage} />
                                ) : null}
                            </>
                            : null
                        }



                    </Container>
                </DarkenedBackground>
            }
        </>
    )
}
