import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Calendar from '../../components/Calendar'
import iconCalendar from "../../assets/calendarMobile.png"
import CardMyCourse from './CardAccount'

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
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function ManagingCourses({ className, isMobile }) {
    
    return (
        <div className={className}>
            {isMobile &&
                <div className='icons-setting'>
                    <img src={iconCalendar} alt="iconCalendar" />
                </div>
            }
        </div>
    )
}

const StyledManagingCourses = styled(ManagingCourses)`
    width: 100%;
    display: flex;
`;



export default function PersonalData({handlerDay}) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <ContainerContent>
            <ListCardAccount>
            <StyledManagingCourses isMobile={isMobile} />
                <ListCard>
                    <CardMyCourse type="student" />
                    <CardMyCourse type="student" />
                    <CardMyCourse type="student" />
                    <CardMyCourse type="student" />
                    <CardMyCourse type="student" />
                </ListCard>
            </ListCardAccount>
            {!isMobile && <Calendar handlerDay={handlerDay} main/>}
        </ContainerContent>
    )
}
