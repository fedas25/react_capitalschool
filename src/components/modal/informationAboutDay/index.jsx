import React from 'react'
import styled from 'styled-components'
import H4 from "../../fonts/desktop/1920_h4"

import teacher from "./../../../assets/teacher.jpg";
import jackdaw from "./../../../assets/jackdaw.png";
import crossExit from "./../../../assets/CrossExit.svg"

import H5 from "../../fonts/desktop/1920_h5"
import Font1920_h6 from "../../fonts/desktop/1920_h6"
import BadgeCource from '../../BadgeCource'

const StyledCardCourseContainer = styled.div`
  width: 100%;
  padding: 64px 0px;
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

function TypeRecord({ trial }) {
    return (
        <>
            {/* {trial ?
                <H6>пробное занятие</H6> :
                <H6>учебное занятие</H6>} */}
        </>
    )
}


const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

function InformationAboutRecord({ className, passed }) {
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
        </div>
    )
}

const StyledInformationAboutRecord = styled(InformationAboutRecord)`
    width: 100%;
    display: flex;
    ${(props) => props.record ? "justify-content: space-between;" : null}
    align-items: center;
`;


const ModalContainer = styled.div`
background-color: white;
width: 1140px;
padding: 64px 32px;
border-radius: 50px;
border: 2px solid gray;
  position: fixed;
  top:12%;
  left: 50%;
  margin-left: -560px;
  z-index: 1;
`

const CrossExit = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  right: -40px;
  top: -80px;
  cursor: pointer;
`;

export default function InformationAboutDay({ type = null, handlerClick }) {
    return (
        <ModalContainer>
            <CrossExit src={crossExit} onClick={handlerClick} />
            <ContainerCardCourse>
                <StyledInformationAboutRecord record={+true} />
                <Main type={type}>
                    <InformationAboutCourses
                        teacherName="Куликова"
                        nameCourse="Losos"
                        colorCourse="#59C4E5"
                        srcTeacher={teacher}
                    />
                </Main>
            </ContainerCardCourse>
        </ModalContainer>
    )
}
