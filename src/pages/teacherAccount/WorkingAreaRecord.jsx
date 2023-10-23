import React from 'react'
import styled from 'styled-components'
import Calendar from '../../components/Calendar'
import CardMyCourse from './CardAccount'
import sorting from "../../assets/sorting.svg"
import FontButton from "../../components/fonts/desktop/1920_button"

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


const Img = styled.img`
    height: 48px;
    width: 48px;
`;

const SortTime = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Type = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Radio = styled.input`
    transform: scale(2.85);
`;

const Radiocell = styled.div`
    width: 220px;
    display: flex;
    align-items: center;
    gap: 28px;
`;


function ManagingCourses({ className }) {
    return (
        <div className={className}>
            <SortTime >
                <Img src={sorting} alt="" />
                <FontButton color="black">Сначала старые</FontButton>
            </SortTime>
            <Type>
                <Radiocell>
                    <Radio type="checkbox" />
                    <FontButton color="black">Учебное занятие</FontButton>
                </Radiocell>
                <Radiocell>
                    <Radio type="checkbox" />
                    <FontButton color="black">Пробное занятие</FontButton>
                </Radiocell>
            </Type>
        </div>
    )
}

const StyledManagingCourses = styled(ManagingCourses)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;

export default function PersonalData() {
    return (
        <ContainerContent>
            <ListCardAccount>
                <StyledManagingCourses />
                <ListCard>
                    <CardMyCourse type="record" />
                    <CardMyCourse type="record" />
                </ListCard>
            </ListCardAccount>
            <Calendar />
        </ContainerContent>
    )
}
