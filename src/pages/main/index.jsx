import React from "react"
import styled from "styled-components";
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

export default function Main() {

    const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
    `;

    return (
        <>
            <NavBar />
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