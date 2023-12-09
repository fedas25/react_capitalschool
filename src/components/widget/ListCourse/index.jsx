import React from "react"
import styled from "styled-components"
import Description from "./Description.jsx"
import Slider from "./Slider.jsx";
import CourseCardStyled from "./CourseCard.jsx";
import { useMediaQuery } from "react-responsive";
import CaruselMobile from "../../CaruselMobile.jsx";

const Container = styled.div`
    background-color: #EFEEF4;
    width: 100%;
    margin: 0 auto;
    padding: 168px 0;
    @media (max-width: 768px) {
        padding: 80px 0;
        margin-top: 80px;
    }
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
    @media (max-width: 768px) {
        gap: 48px;
    }
`;

export default function ListCourses() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <Container>
                <Content>
                    <Description />
                    {isMobile ?
                        <>
                            <CaruselMobile white="1">
                                <CourseCardStyled />
                                <CourseCardStyled />
                                <CourseCardStyled />
                            </CaruselMobile>
                        </>
                        :
                        <>
                            <Slider>
                                <CourseCardStyled />
                                <CourseCardStyled />
                                <CourseCardStyled />
                            </Slider>
                        </>
                    }

                </Content>
            </Container>
        </>
    )
}
