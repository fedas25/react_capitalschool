import React, { useState } from "react"
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
import InformationAboutDay from "./../../components/modal/informationAboutDay"

const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
    `;

const Div = styled.div`
    height: 100px;
    width: 100px;
    background-color: #33abab;
    `;

export default function Main() {
    const [IsDisplayRecordInformation, setIsDisplayRecordInformation] = useState(false)

    function hideFullRecordInformation() {
        setIsDisplayRecordInformation(false)
    }
    function ShowFullRecordInformation() {
        setIsDisplayRecordInformation(true)
    }

    return (
        <>
            <NavBar
                handlerEntry={() => setShowEntry(true)}
                courses={["B1 (Intermediate Level)", "B2 (Upper-Intermediate Level)", "C1 (Intermediate Level)", "C2 (Upper-Intermediate Level)"]}
            />
            <Container>
                <PersonalData />
            <ContainerWorkingArea>
            {IsDisplayRecordInformation ? <InformationAboutDay handlerClick={hideFullRecordInformation} /> : null}
            <NavBarUserAccount />
            <Routes>
                <Route path="/" element={<WorkingAreaCourse handlerDay={ShowFullRecordInformation} />} />
                <Route path="/record" element={<WorkingAreaRecord />} />
                <Route path="/passed" element={<WorkingAreaPassed />} />
            </Routes>
            </ContainerWorkingArea>
                <Footer />
            </Container>
        </>
    )
}