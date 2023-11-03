import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from '@react-spring/web';
import Font1920_h5 from "./../../fonts/desktop/1920_h5"
import Font1920_h6 from "./../../fonts/desktop/1920_h6"
import Font1920_p2 from "./../../fonts/desktop/1920_p2"
import Font1920price from "./../../fonts/desktop/1920_price"
import Font1920aboute from "./../../fonts/desktop/1920_about"
import jackdaw from "./../../../assets/jackdaw.png"
import time from "./../../../assets/time.svg"
import Arrow from "./../../Arrow.jsx"
import Description from "./Description.jsx"
import Slider from "./Slider.jsx";
import StyledPerHour from "./PerHour.jsx";
import StyledPerCourse from "./PerCourse.jsx";
import CourseCardStyled from "./CourseCard.jsx";

const Container = styled.div`
    background-color: #EFEEF4;
    width: 100%;
    margin: 0 auto;
    padding: 168px 0;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 96px;
`;

export default function ListCourses() {

    return (
        <>
            <Container>
                <Content>
                    <Description />
                    <Slider>
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                    </Slider>
                </Content>
            </Container>
        </>
    )
}
