import React, { useState } from "react"
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import NavBar from "./../../components/layout/navigation/NavBar"
import Header from "./Header"
import MakesUsSpecial from "./MakesUsSpecial"
import AdvantagesOnlineClasses from "./AdvantagesOnlineClasses";
import ListCourses from "./ListCourses";
import ListTeacher from "../../components/widget/ListTeacher";
import EnglishLevelTest from "./EnglishLevelTest";
import HowStartLearning from "./HowStartLearning";
import QuestionAnswer from "./QuestionAnswer";
import Footer from "./../../components/Footer.jsx";
// import DropDownListCourses from "../../components/DropDownListCourses";
import H4 from "./../../components/fonts/desktop/1920_h4"

const ContainerlistCourses = styled.div`
    position: absolute;
    width: 100%;
    padding: 96px 128px 120px 96px;
    display: flex;
    justify-content: end;
    background-color: #6B73C2;
    z-index: 1;
`;
const List = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export default function Main() {

    const [Show, SetShow] = useState(false);

    const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
    `;

const handle = () => {SetShow(!Show)}

    return (
        <>
            <NavBar handle={handle}/>
            <CSSTransition in={Show} timeout={1000} classNames="my-node" unmountOnExit>
                <ContainerlistCourses>
                    <List>
                        <H4 white>A1 (Beginner Level)</H4>
                        <H4 white>A2 (Elementary Level)</H4>
                        <H4 white>B1 (Intermediate Level)</H4>
                        <H4 white>B2 (Upper-Intermediate Level)</H4>
                        <H4 white>B1 (Intermediate Level)</H4>
                        <H4 white>B2 (Upper-Intermediate Level)</H4>
                        <H4 white>C1 (Intermediate Level)</H4>
                        <H4 white>C2 (Upper-Intermediate Level)</H4>
                    </List>
                </ContainerlistCourses>
            </CSSTransition>
            <Header />
            <Container>
                <MakesUsSpecial />
                <AdvantagesOnlineClasses />
                <ListCourses />
                <ListTeacher />
                <EnglishLevelTest />
                <HowStartLearning />
                <QuestionAnswer />
                <Footer />
            </Container>
        </>
    )
}