import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import NavBar from "./../../components/layout/navigation/NavBar"
import Header from "./Header"
import MakesUsSpecial from "./MakesUsSpecial"
import AdvantagesOnlineClasses from "./AdvantagesOnlineClasses";
import ListCourses from "./../../components/widget/ListCourse";
import ListTeacher from "../../components/widget/ListTeacher";
import EnglishLevelTest from "./EnglishLevelTest";
import HowStartLearning from "./HowStartLearning";
import QuestionAnswer from "./QuestionAnswer";
import Footer from "./../../components/Footer.jsx";
import Test from '../../components/modal/Test.jsx';

const Container = styled.div`
    display: flex;
    padding: 168px 0 0 0;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 168px;
`;

export default function Main() {

    return (
        <>
            {/* <NavBar
                courses={["B1 (Intermediate Level)", "B2 (Upper-Intermediate Level)", "C1 (Intermediate Level)", "C2 (Upper-Intermediate Level)"]}
            /> */}
            {/* <Header /> */}
            <Container>
            {/* <MakesUsSpecial />
                <AdvantagesOnlineClasses />
            <ListCourses /> */}
            {/* <ListTeacher /> */}
                {/* <EnglishLevelTest /> */}
                {/* <HowStartLearning /> */}
                <Test />
                {/* <QuestionAnswer /> */}
                {/* <Footer /> */}
            </Container>
        </>
    )
}