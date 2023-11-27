import React from "react"
import styled from "styled-components";
import NavBar from "./../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer";
import Header from "./Header";
import CourseDescription from "./CourseDescription";
import ListTeacher from "../../components/widget/ListTeacher";

export default function Course() {

    const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
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