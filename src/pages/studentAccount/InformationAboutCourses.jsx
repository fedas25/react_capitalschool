import React from 'react'
import styled from 'styled-components'
import H5 from "./../../components/fonts/desktop/1920_h5"
import Font1920_h6 from "./../../components/fonts/desktop/1920_h6"
import BadgeCource from '../../components/BadgeCource'

const Container = styled.div`
    display: flex;
    gap: 12px;
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
    width: 460px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
`;

export default function InformationAboutCourses({ teacherName, nameCourse, colorCourse, srcTeacher }) {
    return (
        <Container>
            <PhotoTeacher src={srcTeacher} />
            <StyledInfoCourse teacherName={teacherName} colorCourse={colorCourse} nameCourse={nameCourse}/>
        </Container>
    )
}
