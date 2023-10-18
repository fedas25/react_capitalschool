import React from "react"
import styled from "styled-components";
import NavBar from "./../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer";
import Header from "./Header";
import CourseDescription from "./CourseDescription";

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
            <NavBar />
            <Header />
            <Container>
                <CourseDescription />
                <Footer />
            </Container>
        </>
    )
}