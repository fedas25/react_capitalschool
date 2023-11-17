import React, { useState } from 'react'
import styled from 'styled-components';
import H6 from "./../../fonts/desktop/1920_h6"
import H5 from "./../../fonts/desktop/1920_h5"
import H4 from "./../../fonts/desktop/1920_h4"
import InfoTeacherCource from "./../../InfoTeacherCource"
import photo from "./../../../assets/teacher.jpg"
import crossExit from "./../../../assets/CrossExit.svg"
import Button from "./../../Button"
import longArrow from "./../../../assets/longArrow.svg"
import Calendar from "./../../Calendar"

            const Container = styled.div`
                position: fixed;
                top: 10%;
                left: 50%;
                border: 1px solid gray;
                margin-left: -815px;
                width: 1630px;
                width: ${(props) => props.type === "resultRecord" ? "756px" : "1630px" };
                border-radius: 50px;
                background: #ffff;
                display: grid;
                padding: 64px 32px;
                grid-template-columns: ${(props) => props.type === "resultRecord" ? "auto" : "auto auto" };
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
            `;

            const InformationRecording = styled.div`
            grid-area: InformationRecording;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--srt, #E4E4E7);
            display: flex;
            align-items: center;
            gap: 10px;
            `;

            const TimeRecording = styled.div`
            padding-top: 21px;
            grid-area: TimeRecording;
            display: flex;
            gap: 12px;
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
`;


export default function TransferRecord() {
    const [stage, setStage] = useState(0);

    function SetNextStage() {
        setStage(stage != 4 ? (stage + 1) : 0)
    }

    return (
    <>
        <Container type={stage === 3 ? "resultRecord" : ""}>
        <CrossExit src={crossExit} />

            <TypeRecord>
                Учёбное занятие
            </TypeRecord>

            <InformationRecording>
                <DateTimeRecord>
                    <H4 violet>13 марта</H4>
                    <H4 violet>16:00</H4>          
                </DateTimeRecord>

                <img src={longArrow} alt="longArrow" />

                <DateTimeRecord>
                    {stage === 2 || stage === 3 ? (
                    <H4 violet>13 марта</H4>
                    ) : null}

                    {stage === 2 || stage === 3 ? (
                        <H4 violet>16:00</H4>
                        ) : null}            
                </DateTimeRecord>

            </InformationRecording>

            <StyledInfoTeacherCource teacherName="Зубенко Михаил Петрович" nameCourse="Пивоварение" srcTeacher={photo} />
            
            {(stage === 1 || stage === 2) ? (
            <TimeRecording>
                <H5 gray>13:00</H5>
                <H5 gray>14:00</H5>

                {stage === 2 ? (
                <H5>15:00</H5>
                ) : stage === 1 ? (
                <H5 gray>16:00</H5>
                ) : null}

            </TimeRecording>
            ) : null }

            {stage === 2 ? (
            <ContainerButton>
                <Button title="Перенести"/>
            </ContainerButton>
            ) : null }

            {stage === 3 ? (
            <Notification gray>
                Запись успешно перенесена
            </Notification>
            ) : null }

            {stage != 3 ? (
                <StyledCalendar type="record"/>
            ) : null }

        </Container>
      <button onClick={SetNextStage}>losos</button>
    </>
  )
}
