import React from "react"
import styled from "styled-components";
import NavBar from "../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer.jsx";
import PersonalData from "../../components/widget/PersonalData";
import NavBarUserAccount from "../../components/layout/navigation/NavBarUserAccount";
import WorkingAreaCourse from "./WorkingAreaCourse.jsx"
import WorkingAreaRecord from "./WorkingAreaRecord"
import WorkingAreaPassed from "./WorkingAreaPassed"
import { Route, Routes } from "react-router-dom"
import ContainerWorkingArea from "./ContainerWorkingArea";

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
                <PersonalData />
                <ContainerWorkingArea>
                    <NavBarUserAccount />
                    <Routes>
                        <Route path="/" element={<WorkingAreaCourse />} />
                        <Route path="/record" element={<WorkingAreaRecord />} />
                        <Route path="/passed" element={<WorkingAreaPassed />} />
                    </Routes>
                </ContainerWorkingArea>
                <Footer />
            </Container>
        </>
    )
}