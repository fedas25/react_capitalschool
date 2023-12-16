import React, { useState } from 'react'
import styled from 'styled-components'
import H4 from "../../components/fonts/desktop/1920_h4"
import H5 from "../../components/fonts/desktop/1920_h5"
import H6 from "../../components/fonts/desktop/1920_h6"
import BTN from "../../components/fonts/desktop/1920_button"
import teacher from "./../../assets/teacher.jpg";
import Button from '../../components/Button'
import PricePerHour from '../../components/PricePerHour'
import InformationAboutCourses from './InformationAboutCourses'
import ContainerCardCourse from './ContainerCourse'
import jackdaw from "./../../assets/jackdaw.png";
import testArrow from "./../../assets/testArrow.svg";
import { useMediaQuery } from 'react-responsive'

function Statistics({ className, description, count }) {
    return (
        <div className={className}>
            <H6>{description}</H6>
            <H5 violet>{count}</H5>
        </div>
    )
}

const StyledStatistics = styled(Statistics)`
    display: flex;
    align-items: center;
    gap: 32px;
`

function PassingStatistics({ className }) {
    return (
        <div className={className}>
            <StyledStatistics description="Пройденные" count="12 / 72" />
            <StyledStatistics description="Оплаченные" count="2" />
        </div>
    )
}

const StyledPassingStatistics = styled(PassingStatistics)`
    display: flex;
    gap: 40px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
    }
`;

const Action = styled.div`
    display: flex;
    align-self: center;
    gap: 12px;
`
const Main = styled.div`
    width: 100%;
    display: flex;
    ${(props) => props.type === "passed" ? "justify-content: space-between;" : null}
    ${(props) => props.type != "passed" ? "gap: 12px;" : null}
    gap: 12px;
`;

const Secondary = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 36px;
    }
`;

const Img = styled.img`
    height: 64px;
    width: 64px;
    margin-right: 32px;
    @media (max-width: 768px) {
        width: 48px;
        height: 48px;
        margin-right: 0px;
    }
`;

const Date = styled.div`
    display: flex;
    gap: 12px;
    margin-right: 24px;
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

function TypeRecord({ trial }) {
    return (
        <>
            {/* {trial ?
                <H6>пробное занятие</H6> :
                <H6>учебное занятие</H6>} */}
        </>
    )
}


// вынести
const LinkToSession = styled.div`
background: #EFEEF4;
padding: 16px 28px;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
`;



const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

function InformationAboutRecord({ className, passed = null, isMobile }) {
    return (
        <div className={className}>
            {passed ? (
                <Img src={jackdaw} alt='jackdaw' />
            ) : null}
            <InfoContainer>
                <Date>
                    <H4 violet>13 марта</H4>
                    <H4 violet>16:00</H4>
                </Date>
                <TypeRecord trial />
            </InfoContainer>
            {!isMobile &&
                (
                    passed ? null : (
                        <LinkToSession>
                            <BTN color="violet">ссылка на трансляцию</BTN>
                        </LinkToSession>
                    )
                )
            }
        </div>
    )
}

const StyledInformationAboutRecord = styled(InformationAboutRecord)`
    width: 100%;
    display: flex;
    ${(props) => props.record ? "justify-content: space-between;" : null}
    align-items: center;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

{/*  */}

const PassTest = styled.div`
    cursor: pointer;
    display: flex;
    gap: 12px;
    align-items: center;
    img {
        height: 64px;
        width: 64px;
    }
`;

const ContainerLink = styled.div`
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: end;
    }
`;



export default function CardMyCourse({ type = null, testOpening = null, testFinal = null, handle = null, handlerRecord = null, handlerShowBuyingClasses }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <ContainerCardCourse>
            {(testOpening || testFinal) ? (
                <PassTest onClick={handle}>
                    <img src={testArrow} alt="arrow right" />
                    {isMobile ?
                        <BTN color="gray" result>Пройти {testOpening == true ? "вступительный" : "итоговый"} тест</BTN> :
                        <BTN color="gray">Пройти {testOpening == true ? "вступительный" : "итоговый"} тест</BTN>
                    }
                </PassTest>) :
                null
            }

            {isMobile &&
                type === "record" ? (
                <Date>
                    <H4 violet>13 марта</H4>
                    <H4 violet>16:00</H4>
                </Date>
            ) : null
            }

            {/* ссылка на трансляцию */}
            {!isMobile &&
                type === "record" ? <StyledInformationAboutRecord record={+true} isMobile={isMobile} /> :
                type === "passed" ? <StyledInformationAboutRecord passed isMobile={isMobile} /> :
                    null
            }


            <Main type={type}>
                <InformationAboutCourses
                    teacherName="Куликова Вика Дарьевна"
                    nameCourse="Losos"
                    colorCourse="#59C4E5"
                    srcTeacher={teacher}
                />
                {!isMobile &&
                    type == null ? (
                    <Action>
                        <Button title="Оплатить" handler={handlerShowBuyingClasses} />
                        <Button title="Записаться" btnColor="violet" handler={handlerRecord} />
                    </Action>
                ) : null}
                {!isMobile && type === "passed" ? (
                    <Action>
                        <Button handler={handle} title="Записаться" />
                    </Action>
                ) : null
                }

            </Main>

            {type ? null : (
                <Secondary>
                    <PricePerHour />
                    <StyledPassingStatistics />
                </Secondary>
            )}
            {isMobile &&
                type == null ? (
                <Action>
                    <Button authoriz title="Оплатить" handler={handlerShowBuyingClasses} />
                    <Button authoriz title="Записаться" btnColor="violet" handler={handlerRecord} />
                </Action>
            ) : null}


            {/* чтобы местами менять кнопку записаться */}
            {isMobile && type === "passed" ? (
                <Action>
                    <Button authoriz handler={handle} title="Записаться и оплатить курс" />
                </Action>
            ) : null
            }


            {isMobile &&
                type === "record" ? (
                <ContainerLink>
                    <LinkToSession>
                        <BTN color="violet">ссылка на трансляцию</BTN>
                    </LinkToSession>
                </ContainerLink>
            ) : null
            }

        </ContainerCardCourse>
    )
}
