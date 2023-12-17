import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components";
import NavBar from "../../components/layout/navigation/NavBar"
import Footer from "../../components/Footer.jsx";
import PersonalData from "../../components/widget/PersonalData";
import WorkingAreaMyStudents from "./WorkingAreaMyStudents.jsx"
import WorkingAreaRecord from "./WorkingAreaRecord"
import WorkingAreaPassed from "./WorkingAreaPassed"
import ContainerWorkingArea from "./../studentAccount/ContainerWorkingArea";
import NavBarUserAccount from "../../components/layout/navigation/NavBarUserAccount";
import TransferRecord from "./../../components/modal/transferRecord"
import MarkVisit from "./../../components/modal/markVisit"

const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
        @media (max-width: 768px) {
            padding: 80px 0 0 0;
        }
    `;

export default function Main() {
    const [IsDisplayTransferRecord, setIsDisplayTransferRecord] = useState(false)
    function hideFullRecordInformation() { setIsDisplayTransferRecord(false) }
    function ShowFullRecordInformation() { setIsDisplayTransferRecord(true) }

    const [IsDisplayMarkVisit, setIsDisplayMarkVisit] = useState(false)
    function hideMarkVisit() { setIsDisplayMarkVisit(false) }
    function ShowMarkVisit() { setIsDisplayMarkVisit(true) }

    return (
        <>
            <NavBar
                courses={["B1 (Intermediate Level)", "B2 (Upper-Intermediate Level)", "C1 (Intermediate Level)", "C2 (Upper-Intermediate Level)"]}
            />
            {IsDisplayTransferRecord ? <TransferRecord handler={hideFullRecordInformation} /> : null}
            {IsDisplayMarkVisit ? <MarkVisit handler={hideMarkVisit} /> : null}
            <Container>
                <PersonalData teacher />
                <ContainerWorkingArea>
                    <NavBarUserAccount teacher />
                    <Routes>
                        <Route path="/" element={<WorkingAreaMyStudents />} />
                        <Route path="/record" element={<WorkingAreaRecord handler={ShowFullRecordInformation}/>} />
                        <Route path="/passed" element={<WorkingAreaPassed handler={ShowMarkVisit}/>} />
                    </Routes>
                </ContainerWorkingArea>
                <Footer />
            </Container>
        </>
    )
}