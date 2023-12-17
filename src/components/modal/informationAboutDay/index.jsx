import React from 'react'
import styled from 'styled-components'
import H4 from "../../fonts/desktop/1920_h4"

import teacher from "./../../../assets/teacher.jpg";
import jackdaw from "./../../../assets/jackdaw.png";
import crossExit from "./../../../assets/CrossExit.svg"
import arrowExit from "./../../../assets/arrowExit.svg"

import H5 from "../../fonts/desktop/1920_h5"
import BTN from "../../fonts/desktop/1920_button"
import Font1920_h6 from "../../fonts/desktop/1920_h6"
import BadgeCource from '../../BadgeCource'
import DarkenedBackground from '../../DarkenedBackground';
import { useMediaQuery } from 'react-responsive';

const StyledCardCourseContainer = styled.div`
  width: 100%;
  padding: 64px 0px;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 48px;
  display: flex;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;

function ContainerCardCourse({ children }) {
    return (
        <StyledCardCourseContainer>
            {children}
        </StyledCardCourseContainer>
    )
}

const Container = styled.div`
    display: flex;
    gap: 16px;
`;

const PhotoTeacher = styled.img`
    width: 130px;
    height: 170px;
    @media (max-width: 768px) {
        width: 110px;
        height: 146px;
    }
    border-radius: 30px; 
`;

function InfoCourse({ className, teacherName, nameCourse, colorCourse }) {
    return (
        <div className={className}>
            <H5>{teacherName}</H5>
            <BadgeCource color={colorCourse}>
                <Font1920_h6 white>{nameCourse}</Font1920_h6>
            </BadgeCource>
        </div>
    )
}

const StyledInfoCourse = styled(InfoCourse)`
    min-width: 460px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    @media (max-width: 768px) {
        min-width: 40px;
        height: 146px;
        gap: 0px;
        justify-content: space-between;
    }
`;

function InformationAboutCourses({ teacherName, nameCourse, colorCourse, srcTeacher }) {
    return (
        <Container>
            <PhotoTeacher src={srcTeacher} />
            <StyledInfoCourse teacherName={teacherName} colorCourse={colorCourse} nameCourse={nameCourse} />
        </Container>
    )
}



const Main = styled.div`
    width: 100%;
    display: flex;
    ${(props) => props.type === "passed" ? "justify-content: space-between;" : null}
    ${(props) => props.type != "passed" ? "gap: 12px;" : null}
    gap: 12px;
`;

const Img = styled.img`
    height: 64px;
    width: 64px;
    margin-right: 32px;
`;

const Date = styled.div`
    display: flex;
    gap: 12px;
    margin-right: 24px;
`;

function TypeRecord({ trial = null }) {
    return (
        <>
            {trial ?
                <Font1920_h6>пробное занятие</Font1920_h6> :
                <Font1920_h6>учебное занятие</Font1920_h6>}
        </>
    )
}

const LinkToSession = styled.div`
    background: #EFEEF4;
    padding: 16px 28px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        gap: 12px;
    }
`;

function InformationAboutRecord({ className, passed }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
            {!isMobile ?
                < LinkToSession >
                    <BTN color="violet">ссылка на трансляцию</BTN>
                </LinkToSession>
                : null
            }
        </div >
    )
}

const StyledInformationAboutRecord = styled(InformationAboutRecord)`
    width: 100%;
    display: flex;
    ${(props) => props.record ? "justify-content: space-between;" : null}
    align-items: center;
    justify-content: space-between;
`;


const ModalContainer = styled.div`
background-color: white;
width: 1140px;
padding: 64px 32px;
border-radius: 50px;
position: fixed;
@media (min-width: 768px) {
    top:12%;
}
left: 50%;
margin-left: -560px;
z-index: 1;
@media (max-width: 768px) {
    width: 100vw;
    padding: 40px 16px;
    border-radius: 40px 40px 0px 0px;
    margin-left: 0px;
    bottom: 0px;
    left: 0px;
}
`

const CrossExit = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  right: -40px;
  top: -80px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    right: 0px;
    top: -56px;
}
`;

const ArrowExit = styled.img`
    width: 48px;
    height: 48px;
    margin-right: auto;
`;

export default function InformationAboutDay({ type = null, handlerClick = null }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <DarkenedBackground>
            <ModalContainer>
                <CrossExit src={crossExit} onClick={handlerClick} />
                {isMobile ? <ArrowExit src={arrowExit} alt='ArrowExit'/> : null }
                <ContainerCardCourse>
                    <StyledInformationAboutRecord record={+true} />
                    <Main type={type}>
                        <InformationAboutCourses
                            teacherName="Кузин Федор Александрович"
                            nameCourse="Losos"
                            colorCourse="#59C4E5"
                            srcTeacher={teacher}
                        />
                    </Main>
                    {isMobile ?
                        < LinkToSession >
                            <BTN color="violet">ссылка на трансляцию</BTN>
                        </LinkToSession>
                        : null
                    }
                </ContainerCardCourse>
            </ModalContainer>
        </DarkenedBackground>
    )
}
