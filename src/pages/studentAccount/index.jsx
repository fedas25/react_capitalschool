import React from "react"
import styled from "styled-components";
import NavBar from "../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer.jsx";
import PersonalData from "../../components/widget/PersonalData";
import WorkingArea from "./WorkingArea.jsx"

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
            <Container>
                {/* <PersonalData /> */}
                <WorkingArea />
                <Footer />
            </Container>
        </>
    )
}