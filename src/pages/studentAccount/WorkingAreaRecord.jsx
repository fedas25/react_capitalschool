import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from '../../components/Calendar'
import CardMyCourse from './CardAccount'
import sorting from "../../assets/sorting.svg"
import iconCalendar from "../../assets/calendarMobile.png"
import settings from "../../assets/settings.png"
import FontButton from "../../components/fonts/desktop/1920_button"
import { useMediaQuery } from 'react-responsive'

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
    @media (max-width: 768px) {
        width: 100%;
    }
`;




// вынести в отдельный компонент 
const ListCard = styled.div`
    border-top: 2px solid var(--srt, #E4E4E7);
    width: 100%;
    display: flex;
    flex-direction: column;
`;





const Img = styled.img`
    height: 48px;
    width: 48px;
    @media (max-width: 768px) {
        height: 32px;
        width: 32px;
    }
`;

const SortTime = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 768px) {
        gap: 4px;
    }
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



function CettingsForm({ className }) {
    return (
        <div className={className}>
            <div>
                <input type="radio" name='losos'/>
                <FontButton color="black">Учебное занятие</FontButton>
            </div>
            <div>
                <input type="radio" name='losos'/>
                <FontButton color="black">Пробное занятие</FontButton>
            </div>
        </div>
    )
}
const StyledCettingsForm = styled(CettingsForm)`
        position: absolute;
        top: 64px;
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        z-index: 4;
        background-color: #fff;
        border-radius: 50px;
        border: 2px solid #E4E4E7;
        div {
            display: flex;
            gap: 14px;
            min-width: max-content;
            input {
                transform: scale(2.2);
            }
        }
    `;


function ManagingCourses({ className, isMobile }) {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className={className}>
            <SortTime >
                <Img src={sorting} alt="iconSorting" />
                <FontButton color="black">Сначала старые</FontButton>
            </SortTime>
            {isMobile &&
                <div className='icons-setting'>
                    {showSettings ? <StyledCettingsForm /> : null}
                    <img src={iconCalendar} alt="iconCalendar" />
                    <img onClick={() => {setShowSettings(!showSettings)}} src={settings} alt="settings" />
                </div>
            }
            {!isMobile &&
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
            }
        </div>
    )
}

const StyledManagingCourses = styled(ManagingCourses)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    .icons-setting {
        display: flex;
        gap: 8px;
        position: relative;
    }
    @media (max-width: 768px) {
        flex-direction: row-reverse;
        gap: 0px;
    }
`;

export default function PersonalData() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            <ContainerContent>
                <ListCardAccount>
                    <StyledManagingCourses isMobile={isMobile} />
                    <ListCard>
                        <CardMyCourse type="record" />
                        <CardMyCourse type="record" />
                        <CardMyCourse type="record" />
                    </ListCard>
                </ListCardAccount>
                {!isMobile && <Calendar main />}
            </ContainerContent>
        </>
    )
}
