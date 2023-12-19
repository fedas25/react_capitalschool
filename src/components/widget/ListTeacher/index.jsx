import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
import Font1920_h2 from "./../../fonts/desktop/1920_h2"
import Arrow from "./../../Arrow"
import CaruselMobile from "./../../CaruselMobile.jsx"
import CardTeacher from "./cardTeacher.jsx"

import teacher from "./../../../assets/teacher.jpg"
import teacher1 from "./../../../assets/teacher1.jpg"
import teacher2 from "./../../../assets/teacher2.jpeg"
import teacher3 from "./../../../assets/teacher3.jpg"

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 96px;
    @media (max-width: 768px) {
        gap: 48px;
        margin: 80px auto;
    }
    position: relative;
`;

const Description = styled.p`
    max-width: 1664px;
    @media (max-width: 768px) {
        max-width: 320px;
    }
    color: black;
`;

const List = styled.div`
    position: relative;
    width: 1664px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    overflow: clip;
`



const Cards = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    position: relative;
    transform: ${({ offset }) => `translateX(${offset}px)`} ;
    transition: transform 400ms;
    `;

function NavigationButton({ className, handler }) {
    return (
        <div className={className}>
            <Arrow startLearning handle={handler.left} />
            <Arrow startLearning handle={handler.right} right />
        </div>
    )
}

const StyledNavigationButton = styled(NavigationButton)`
    position: absolute;
    z-index: 2;
    top: 0px;
    right: 0px;
    ${({ mobile }) => mobile ? `
        top: 268px;
        right: 11vw;`
        : null}
`;


export default function ListTeacher({ course }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [offset, setOffset] = useState(0);

    function handlerLeft() {
        setOffset(offset + 1);
    }
    function handlerRight() {
        setOffset(offset - 1);
    }

    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Наши преподаватели сделают обучение английским интересным и захватывающим</Font1920_h2>
                </Description>

                {isMobile ?
                    <>
                        <StyledNavigationButton mobile={+true} handler={{ left: handlerLeft, right: handlerRight }} />
                        <CaruselMobile noNavigation externalHandlerLeft={handlerLeft} externalHandlerRight={handlerRight} externalCardNumber={offset} external>
                        <CardTeacher course={course} src={teacher} />
                                <CardTeacher course={course} src={teacher1} />
                                <CardTeacher course={course} src={teacher2} />
                                <CardTeacher course={course} src={teacher3} />
                                <CardTeacher course={course} src={teacher3} />
                        </CaruselMobile>
                    </>
                    :
                    <>
                        <List>
                            <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />
                            <Cards offset={offset * 1664}>
                                <CardTeacher course={course} src={teacher} />
                                <CardTeacher course={course} src={teacher1} />
                                <CardTeacher course={course} src={teacher2} />
                                <CardTeacher course={course} src={teacher3} />
                                <CardTeacher course={course} src={teacher3} />
                            </Cards>
                        </List>
                    </>
                }

            </Container>
        </>
    )
}
