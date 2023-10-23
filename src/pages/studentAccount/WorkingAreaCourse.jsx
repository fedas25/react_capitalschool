import React from 'react'
import styled from 'styled-components'
import Calendar from '../../components/Calendar'
import AddCourse from './AddCourse'
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

export default function PersonalData() {
    return (
        <>
            <ContainerContent>
                <ListCardAccount>
                    <AddCourse />
                    <ListCard>
                        <CardMyCourse />
                        <CardMyCourse />
                        <CardMyCourse />
                    </ListCard>
                </ListCardAccount>
                <Calendar />
            </ContainerContent>
        </>
    )
}
