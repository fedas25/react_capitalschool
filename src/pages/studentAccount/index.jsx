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
import Recording from "./../../components/modal/recording"
import BuyingClasses from "./../../components/modal/buyingClasses"
import MobileCalendar from "../../components/MobileCalendar.jsx";

const Container = styled.div`
        display: flex;
        padding: 168px 0 0 0;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 168px;
        @media (max-width: 768px) {
            row-gap: 40px;
            padding: 40px 0 0 0;
        }
    `;

export default function Main() {
    const [IsDisplayRecordInformation, setIsDisplayRecordInformation] = useState(false)
    function hideFullRecordInformation() { setIsDisplayRecordInformation(false) }
    function ShowFullRecordInformation() { setIsDisplayRecordInformation(true) }

    const [IsDisplayRecord, setIsDisplayInformation] = useState(false)
    function hideFullRecord() { setIsDisplayInformation(false) }
    function ShowFullRecord() { setIsDisplayInformation(true) }

    const [IsBuyingClasses, setIsBuyingClasses] = useState(false)
    function hideBuyingClasses() { setIsBuyingClasses(false) }
    function ShowBuyingClasses() { setIsBuyingClasses(true) }

    const [isViewRecords, setIsViewRecords] = useState(true)
    function hideViewRecords() { setIsViewRecords(false) }
    function ShowViewRecords() { setIsViewRecords(true) }

    return (
        <>
            <NavBar
                handlerEntry={() => setShowEntry(true)}
                courses={["B1 (Intermediate Level)", "B2 (Upper-Intermediate Level)", "C1 (Intermediate Level)", "C2 (Upper-Intermediate Level)"]}
            />

            {/* где-то тут должны храниться данные о записях на конкретный день, чтобы календарь мог отобразить
                данные прдробне при клике на день
            */}

            <Container>
                <PersonalData />
                <ContainerWorkingArea>

                    {/* {IsDisplayRecord ? <Recording handlerClick={hideFullRecord} /> : null}
                    {IsDisplayRecordInformation ? <InformationAboutDay handlerClick={hideFullRecordInformation} /> : null}
                    {IsBuyingClasses ? <BuyingClasses handlerClick={hideBuyingClasses} /> : null} */}
                    {isViewRecords ? <MobileCalendar /> : null}

                    <NavBarUserAccount student/>
                    <Routes>
                        <Route path="/" element={<WorkingAreaCourse handlerShowBuyingClasses={ShowBuyingClasses} handlerDay={ShowFullRecordInformation} handlerRecord={ShowFullRecord} />} />
                        <Route path="/record" element={<WorkingAreaRecord />} />
                        <Route path="/passed" element={<WorkingAreaPassed handlerShowBuyingClasses={ShowBuyingClasses}/>} />
                    </Routes>
                </ContainerWorkingArea>
                {/* <Footer /> */}
            </Container>
        </>
    )
}