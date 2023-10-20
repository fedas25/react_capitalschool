import React from 'react'
import styled from 'styled-components'
import H5 from "./../../components/fonts/desktop/1920_h5"
import H6 from "./../../components/fonts/desktop/1920_h6"
import teacher from "./../../assets/teacher.jpg";
import Button from '../../components/Button'
import PricePerHour from '../../components/PricePerHour'
import InformationAboutCourses from './InformationAboutCourses'
import ContainerCardCourse from './ContainerCourse'

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
    gap: 12px;
`;

const Secondary = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export default function CardMyCourse() {
    return (
        <ContainerCardCourse>
            <Main>
                <InformationAboutCourses
                    teacherName="Куликова"
                    nameCourse="Losos"
                    colorCourse="#59C4E5"
                    srcTeacher={teacher}
                />
                <Action>
                    <Button title="Оплатить" />
                    <Button title="Записаться" color="violet" />
                </Action>
            </Main>
            <Secondary>
                <PricePerHour />
                <StyledPassingStatistics />
            </Secondary>
        </ContainerCardCourse>
    )
}
