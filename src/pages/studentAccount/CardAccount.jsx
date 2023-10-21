import React from 'react'
import styled from 'styled-components'
import H4 from "../../components/fonts/desktop/1920_h4"
import H5 from "../../components/fonts/desktop/1920_h5"
import H6 from "../../components/fonts/desktop/1920_h6"
import BTN from "../../components/fonts/desktop/1920_button"
import teacher from "./../../assets/teacher.jpg";
import Button from '../../components/Button'
import PricePerHour from '../../components/PricePerHour'
import InformationAboutCourses from './InformationAboutCourses'
import ContainerCardCourse from './ContainerCourse'
import jackdaw from "./../../assets/jackdaw.png";

function Statistics({ className, description, count }) {
    return (
        <div className={className}>
            <H6>{description}</H6>
            <H5 violet>{count}</H5>
        </div>
    )
}

const StyledStatistics = styled(Statistics)`
    display: flex;
    align-items: center;
    gap: 32px;
`

function PassingStatistics({ className }) {
    return (
        <div className={className}>
            <StyledStatistics description="Пройденные" count="12 / 72" />
            <StyledStatistics description="Оплаченные" count="2" />
        </div>
    )
}

const StyledPassingStatistics = styled(PassingStatistics)`
    display: flex;
    gap: 40px;
`;

const Action = styled.div`
    display: flex;
    align-self: center;
    gap: 12px;
`
const Main = styled.div`
    width: 100%;
    display: flex;
    ${(props) => props.type === "passed" ? "justify-content: space-between;" : null}
    ${(props) => props.type != "passed" ? "gap: 12px;" : null}
    gap: 12px;
`;

const Secondary = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Img = styled.img`
    height: 64px;
    width: 64px;
    margin-right: 32px;
`;

const Date = styled.div`
    display: flex;
    gap: 12px;
    margin-right: 24px;
`;

function TypeRecord({ trial }) {
    return (
        <>
            {trial ?
                <H6>пробное занятие</H6> :
                <H6>учебное занятие</H6>}
        </>
    )
}

const LinkToSession = styled.div`
background: #EFEEF4;
padding: 16px 28px;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

function InformationAboutRecord({ className, passed }) {
    return (
        <div className={className}>
            {passed ? (
                <Img src={jackdaw} alt='jackdaw' />
            ) : null}
            <InfoContainer>
                <Date>
                    <H4 violet>13 марта</H4>
                    <H4 violet>16:00</H4>
                </Date>
                <TypeRecord trial />
            </InfoContainer>
            {passed ? null : (
                <LinkToSession>
                    <BTN color="violet">ссылка на трансляцию</BTN>
                </LinkToSession>
            )}
        </div>
    )
}

const StyledInformationAboutRecord = styled(InformationAboutRecord)`
    width: 100%;
    display: flex;
    ${(props) => props.record ? "justify-content: space-between;" : null}
    align-items: center;
`;

export default function CardMyCourse({ type = null }) {
    return (
        <ContainerCardCourse>
            {type === "record" ? <StyledInformationAboutRecord record={+true}/> :
            type === "passed" ? <StyledInformationAboutRecord passed /> :
            null}
            <Main type={type}>
                <InformationAboutCourses
                    teacherName="Куликова"
                    nameCourse="Losos"
                    colorCourse="#59C4E5"
                    srcTeacher={teacher}
                />

                {type == null ? (
                    <Action>
                        <Button title="Оплатить" />
                        <Button title="Записаться" color="violet" />
                    </Action>
                ) : null}
                {type === "passed" ? (
                    <Action>
                        <Button title="Записаться" />
                    </Action>
                ) : null}

            </Main>

            {type ? null : (
                <Secondary>
                    <PricePerHour />
                    <StyledPassingStatistics />
                </Secondary>
            )}
        </ContainerCardCourse>
    )
}
