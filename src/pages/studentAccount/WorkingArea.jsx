import React from 'react'
import styled from 'styled-components'
import NavBarUserAccount from "./../../components/layout/navigation/NavBarUserAccount"
import FontButton from "./../../components/fonts/desktop/1920_button"
import H5 from "./../../components/fonts/desktop/1920_h5"
import H6 from "./../../components/fonts/desktop/1920_h6"
import Font1920_h6 from "./../../components/fonts/desktop/1920_h6"
import OpeningCross from "./../../assets/openingCross.png"
import teacher from "./../../assets/teacher.jpg";
import Button from '../../components/Button'
import PricePerHour from '../../components/PricePerHour'
import Calendar from './Calendar'

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
    gap: 96px;
`;

const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 64px;
`;







const Img = styled.img`
    height: 64px;
    width: 64px;
`;

function AddCourse({ className }) {
    return (
        <div className={className}>
            <Img src={OpeningCross} alt="OpeningCross" />
            <FontButton color="gray">Добавить курс</FontButton>
        </div>
    )
}

const StyledAddCourse = styled(AddCourse)`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 12px;
`;



const ListCardAccount = styled.div`
    width: 1116px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const ListCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;



const PhotoTeacher = styled.img`
    width: 130px;
    height: 170px;
    border-radius: 30px;
`;


const Course = styled.div`
        display: flex;
        padding: 10px 18px 12px 18px;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: ${(props) => ((props.color) ? props.color : "#D793E3")};
`;

function InfoCourse({ className }) {
    return (
        <div className={className}>
            <H5>Куликова </H5>
            <Course color="#59C4E5">
                <Font1920_h6 white>ОГЭ</Font1920_h6>
            </Course>
        </div>
    )
}

const StyledInfoCourse = styled(InfoCourse)`
width: 460px;
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 24px;
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

const Secondary = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



function CardMyCourseUserAccount({ className }) {
    return (
        <div className={className}>
            <Main>
                <PhotoTeacher src={teacher} />
                <StyledInfoCourse />
                <Action>
                    <Button title="Оплатить" />
                    <Button title="Записаться" color="violet" />
                </Action>
            </Main>
            <Secondary>
                <PricePerHour />
                <StyledPassingStatistics />
            </Secondary>
        </div>
    )
}

const StyledCardMyCourseUserAccount = styled(CardMyCourseUserAccount)`
    width: 100%;
    padding: 64px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 48px;
    display: flex;
    border-bottom: 2px solid var(--srt, #E4E4E7);
`;

export default function PersonalData() {
    return (
        <Container>
            <Content>
                <NavBarUserAccount />
                <ContainerContent>
                    <ListCardAccount>
                        <StyledAddCourse />
                        <ListCard>
                            <StyledCardMyCourseUserAccount />
                            <StyledCardMyCourseUserAccount />
                            <StyledCardMyCourseUserAccount />
                            <StyledCardMyCourseUserAccount />
                            <StyledCardMyCourseUserAccount />
                        </ListCard>
                    </ListCardAccount>
                    <Calendar />
                </ContainerContent>
            </Content>
        </Container>
    )
}
