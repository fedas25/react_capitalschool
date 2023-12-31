import React from "react"
import styled from "styled-components";
import NavBar from "./../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer";
import Header from "./Header";
import CourseDescription from "./CourseDescription";
import ListTeacher from "../../components/widget/ListTeacher";
import { useMediaQuery } from "react-responsive";

export default function Course() {

    const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
        @media (max-width: 768px) {
            row-gap: 80px;
            padding: 0 0 0 0;
        }
    `;

    return (
        <>
            <NavBar
                courses={["B1 (Intermediate Level)", "B2 (Upper-Intermediate Level)", "C1 (Intermediate Level)", "C2 (Upper-Intermediate Level)"]}
            />
            <Header />
            <Container>
                <CourseDescription />
                <ListTeacher/>
                <Footer />
            </Container>
        </>
    )
}