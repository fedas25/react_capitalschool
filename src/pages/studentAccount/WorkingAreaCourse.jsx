import React, {useState} from 'react'
import styled from 'styled-components'
import Calendar from '../../components/Calendar'
import AddCourse from './AddCourse'
import CardMyCourse from './CardAccount'
import Test from '../../components/modal/Test.jsx';

const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 64px;
`;

const ListCardAccount = styled.div`
    width: 1116px;
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

export default function PersonalData({handlerDay, handlerRecord, handlerShowBuyingClasses}) {
    const [showTest, setShowTest] = useState(false)

    return (
        <>
            <Test show={showTest} setShow={setShowTest}/>
            <ContainerContent>
                <ListCardAccount>
                    <AddCourse />
                    <ListCard>
                        <CardMyCourse testOpening handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses} />
                        <CardMyCourse testFinal handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses}/>
                        <CardMyCourse handle={() => setShowTest(true)} handlerRecord={handlerRecord} handlerShowBuyingClasses={handlerShowBuyingClasses}/>
                    </ListCard>
                </ListCardAccount>
                <Calendar handlerDay={handlerDay} main/>
            </ContainerContent>
        </>
    )
}
