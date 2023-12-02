import React, { useState } from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../fonts/desktop/1920_h2"
import Arrow from "./../../Arrow"
import CardTeacher from "./cardTeacher.jsx"

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 96px;
    position: relative;
`;

const Description = styled.p`
    max-width: 1664px;
    font-size: 65px;
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


function NavigationButton({ className, handler }) {
    return (
        <div className={className}>
            <Arrow handle={handler.left}/>
            <Arrow handle={handler.right} right />
        </div>
    )
}

const StyledNavigationButton = styled(NavigationButton)`
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    `;

const Cards = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    position: relative;
    transform: ${ ({offset}) => `translateX(${offset}px)` } ;
    transition: transform 400ms;
`;

export default function ListTeacher({ course }) {
    const [offset, setOffset] = useState(0);
    
    function handlerLeft() {
        setOffset(offset + 1664);
    }
    function handlerRight() {
        setOffset(offset - 1664);
    }

    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Наши преподаватели сделают обучение английским интересным и захватывающим</Font1920_h2>
                </Description>
                <List>
                    <StyledNavigationButton handler={{left: handlerLeft, right: handlerRight }}/>
                    <Cards offset={offset}>
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                        <CardTeacher course={course} />
                    </Cards>
                </List>
            </Container>
        </>
    )
}
