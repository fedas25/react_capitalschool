import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from '../../components/Calendar'
import AddCourse from './AddCourse'
import CardMyCourse from './CardAccount'
import Test from '../../components/modal/test';
import iconCalendar from "./../../assets/calendarMobile.png"
import { useMediaQuery } from 'react-responsive'

const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 64px;
`;

const ListCardAccount = styled.div`
    width: 1116px;
    @media (max-width: 768px) {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const ListCard = styled.div`
    border-top: 2px solid var(--srt, #E4E4E7);
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const AdditionalActions = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 48px;
        height: 48px;
    }
`;

export default function PersonalData({ handlerDay, handlerRecord, handlerShowBuyingClasses }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const [showTest, setShowTest] = useState(false)

    return (
        <>
            <Test show={showTest} setShow={setShowTest} isAccount/>

            <ContainerContent>
                <ListCardAccount>
                    <AdditionalActions>
                        {isMobile && <img src={iconCalendar} alt="iconCalendar"/>} 
                        <AddCourse />
                    </AdditionalActions>

                    <ListCard>
                        <CardMyCourse testOpening handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses} />
                        <CardMyCourse testFinal handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses}/>
                        <CardMyCourse handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses}/>
                    </ListCard>
                </ListCardAccount>
                {!isMobile && <Calendar handlerDay={handlerDay} main />}
            </ContainerContent>
        </>
    )
}
