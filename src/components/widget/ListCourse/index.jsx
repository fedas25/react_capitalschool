import React, { useState } from "react"
import styled from "styled-components"
import Description from "./Description.jsx"
import Slider from "./Slider.jsx";
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
