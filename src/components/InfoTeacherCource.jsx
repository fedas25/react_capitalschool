import React from 'react'
import styled from 'styled-components'
import H5 from "./fonts/desktop/1920_h5"
import Font1920_h6 from "./fonts/desktop/1920_h6"
import BadgeCource from "./BadgeCource"

const Container = styled.div`
    display: flex;
    gap: 16px;
`;

const PhotoTeacher = styled.img`
    width: 130px;
    height: 170px;
    border-radius: 30px;
    @media (max-width: 768px) {
        ${ ({payment, mark}) => payment && !mark ? `
            width: 110px;
            height: 146px;
            border-radius: 25px;` : null        
        }
    }
`;

function InfoCourse({ className, teacherName, nameCourse, colorCourse, payment }) {
    return (
        <div className={className}>
            {payment ? <H5 teacher>{teacherName}</H5> : <H5>{teacherName}</H5>} 
            <BadgeCource color={colorCourse}>
                <Font1920_h6 white>{nameCourse}</Font1920_h6>
            </BadgeCource>
        </div>
    )
}

const StyledInfoCourse = styled(InfoCourse)`
    min-width: 460px;
    @media (max-width: 768px) {
        min-width: 20px;
    }
    height: 150px;
    @media (max-width: 768px) {
        ${ ({payment}) => payment ? `
            min-width: 20px;
            width: auto;` : null        
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
`;

export default function InformationAboutCourses({ teacherName, nameCourse, colorCourse, srcTeacher, mark = false, payment = false, className = null }) {
    return (
        <Container className={className}>
            <PhotoTeacher src={srcTeacher} payment={+payment} mark={+mark}/>
            <StyledInfoCourse payment={+payment} teacherName={teacherName} colorCourse={colorCourse} nameCourse={nameCourse}/>
        </Container>
    )
}
