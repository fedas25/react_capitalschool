import React from 'react'
import styled from 'styled-components'
import NavBarUserAccount from "../../components/layout/navigation/NavBarUserAccount"
import Calendar from '../../components/Calendar'
import AddCourse from './AddCourse'
import CardMyCourse from './CardAccount'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 1664px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 96px;
`;

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
        <Container>
            <Content>
                <NavBarUserAccount />
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
            </Content>
        </Container>
    )
}
