import React, { useState } from 'react'
import styled from 'styled-components';
import H6 from "./../../fonts/desktop/1920_h6"
import H5 from "./../../fonts/desktop/1920_h5"
import H4 from "./../../fonts/desktop/1920_h4"
import FontButton from "./../../fonts/desktop/1920_button"
import InfoTeacherCource from "./../../InfoTeacherCource"
import photo from "./../../../assets/teacher.jpg"
import crossExit from "./../../../assets/CrossExit.svg"
import Button from "./../../Button"
import Calendar from "./../../Calendar"
import DarkenedBackground from '../../DarkenedBackground';

const Container = styled.div`
                z-index: 1;
                position: fixed;
                top: 10%;
                left: 50%;
                margin-left: -815px;
                width: 1630px;
                border-radius: 50px;
                background: #ffff;
                display: grid;
                padding: 64px 32px;
                grid-template-columns: auto auto;
                grid-template-rows: auto auto auto auto auto;
                grid-template-areas:
                ${(props) => props.type === "resultRecord" ?
        `"InformationRecording Calendar"
                    "InfoTeacherCource Calendar"
                    "LinkToBroadcast Calendar"
                    ". Calendar"
                    ". Calendar"` :

        `"InformationRecording Calendar"
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
            gap: 24px;
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
const LinkToBroadcast = styled.div`
                width: 346px;
                padding: 16px 28px;
                grid-area: LinkToBroadcast;
                align-self: start;
                border-radius: 30px;
                background: var(--color3, #EFEEF4);
                margin-top: 19px;
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






export default function Recording({ handlerClick, test = null }) {
    const [stage, setStage] = useState(0);

    function SetNextStage() {
        setStage(stage != 4 ? (stage + 1) : 0)
    }

    // const time = ["13:00", "14:00", "15:00"]
    // const listTime = time.map((time, index) => <H5 key={index} gray>{time}</H5>)

    // сделать, чтобы в компоненте данные собирались для записи
    // а после нажатия кнопки записаться делался 1 запрос на сервер
    // изменятся визуал должен сам

    return (
        <>
            <DarkenedBackground>
                <Container type={stage === 3 ? "resultRecord" : ""}>
                    <CrossExit src={crossExit} onClick={handlerClick} />
                    <InformationRecording>

                        <DateTimeRecord>
                            {stage === 1 || stage === 2 || stage === 3 ? (
                                <H4 violet>13 марта</H4>
                            ) : null}

                            {stage === 2 || stage === 3 ? (
                                <H4 violet>16:00</H4>
                            ) : null}
                        </DateTimeRecord>

                        <H6>{test ? "Пробное" : "Учёбное"} занятие</H6>
                    </InformationRecording>
                    <StyledInfoTeacherCource teacherName="Зубенко Михаил Петрович" nameCourse="Пивоварение" srcTeacher={photo} />

                    {(stage === 1 || stage === 2) ? (
                        <TimeRecording>
                            <H5 gray>13:00</H5>
                            <H5 gray>14:00</H5>

                            {stage === 2 ? (
                                <H5>16:00</H5>
                            ) : stage === 1 ? (
                                <H5 gray handler={SetNextStage}>16:00</H5>
                            ) : null}

                        </TimeRecording>
                    ) : null}

                    {stage === 2 ? (
                        <ContainerButton>
                            <Button title="Записаться" handler={SetNextStage} />
                        </ContainerButton>
                    ) : null}

                    {stage === 3 ? (
                        <LinkToBroadcast>
                            <FontButton color="violet">ссылка на трансляцию</FontButton>
                        </LinkToBroadcast>
                    ) : null}


                    <StyledCalendar type="record" handlerDay={SetNextStage} />
                </Container>
            </DarkenedBackground>
        </>
    )
}


// stage:
// 0 - set personal data name email password
// 1 - set confirmation code
// 2 - registration was successful
// type:
// 0 - registration
// 1 - Authorization
// stage:
// 0 - set personal data name email password
// 1 - set confirmation code
// 2 - registration was successful
// два stage под разные типы модалок stageRegistration stageAutorisition
// при входе, сразу кинет в учётку

/* const WorkingArea = (stage) => {
    switch (stage) {
        case 0:
            return <Registration handlerNav={{SetAutorisition: SetAutorisition, SetRegistrition: SetRegistrition}} handlerButton={SetNextStage} />;
            case 1:
      return <GetCode handlerButton={SetNextStage} />;
    case 2:
        return <ActivityBeenCompleted title="Регистрация прошла успешно" handlerButton={SetNextStage} />;
        case 3:
            return <ActivityBeenCompleted title="Регистрация прошла успешно" handlerButton={SetNextStage} />;
            default:
                return <Registration handlerButton={SetNextStage} />;
              }
          }; */