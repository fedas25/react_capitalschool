import React from "react"
import styled from "styled-components";
import NavBar from "../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer.jsx";
import PersonalData from "../../components/widget/PersonalData";
import WorkingAreaMyStudents from "./WorkingAreaMyStudents.jsx"
import WorkingAreaRecord from "./WorkingAreaRecord"
import WorkingAreaPassed from "./WorkingAreaPassed"
import ContainerWorkingArea from "./../studentAccount/ContainerWorkingArea";
import NavBarUserAccount from "../../components/layout/navigation/NavBarUserAccount";
import {Routes, Route} from "react-router-dom"

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
            {/* <NavBar /> */}
            <Container>
                <PersonalData teacher />
                <ContainerWorkingArea>
                    <NavBarUserAccount teacher />
                    <Routes>
                        <Route path="/" element={<WorkingAreaMyStudents />} />
                        <Route path="/record" element={<WorkingAreaRecord />} />
                        <Route path="/passed" element={<WorkingAreaPassed />} />
                    </Routes>
                </ContainerWorkingArea>
                {/* <Footer /> */}
            </Container>
        </>
    )
}