import React, { useState, useEffect } from 'react';
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
import DropDownListCourses from "../../components/DropDownListCourses";
import H4 from "./../../components/fonts/desktop/1920_h4"
import { useSpring, animated } from '@react-spring/web';


const Container = styled.div`
    display: flex;
    padding: 168px 0 0 0;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 168px;
`;








const ContainerlistCourses = styled.div`
position: absolute;
width: 100%;
padding: 96px 128px 120px 96px;
display: flex;
justify-content: end;
background-color: #6B73C2;
z-index: 1;
top: -1400px;
`;

const List = styled.div`
min-width: 100px;
display: flex;
flex-direction: column;
gap: 24px;
`;

const AnimatedContainerlistCourses = animated(ContainerlistCourses)

export default function Main() {
    const [show, setShow] = useState(1);
    const [springs, api] = useSpring(() => ({}))
    
    api.start({
        from: {
            y: (show === 1) ? 0 : show ? 0 : 1552,
        },
        to: {
            y: (show === 1) ? 0 : show ? 1552 : 0,
        },
    })
    
    function animationHandler() {
        if (show === 1) {
            setShow(true)
        } else setShow(!show)
    }

    return (
        <>
            <NavBar handle={animationHandler} />
            <AnimatedContainerlistCourses style={springs}>
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
            </AnimatedContainerlistCourses>
            {/* <Header /> */}
            {/* <Container>
                <MakesUsSpecial />
                <AdvantagesOnlineClasses />
                <ListCourses />
                <ListTeacher />
                <EnglishLevelTest />
                <HowStartLearning />
                <QuestionAnswer />
                <Footer />
            </Container> */}
        </>
    )
}