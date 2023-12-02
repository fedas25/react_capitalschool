import React, { useState } from "react"
import styled from "styled-components"
import Arrow from "./../../Arrow.jsx"

export default function Slider({ children }) {
    const [offset, setOffset] = useState(0);
    
    function handlerLeft() {
        setOffset(offset + 800);
    }
    function handlerRight() {
        setOffset(offset - 800);
    }

    return (
        <Container>
            <StyledArrovLeft handle={handlerLeft}/>
            <StyledArrovRight handle={handlerRight} right />
            <PageContainer offset={offset}>
                {children}
            </PageContainer>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    position: relative;
    overflow: clip;
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

const PageContainer = styled.div`
    display: flex;
    gap: 24px;
    transform: ${ ({offset}) => `translateX(${offset}px)` } ;
    transition: transform 400ms;
`;

const StyledArrovLeft = styled(Arrow)`
    position: absolute;
    top:50%;
    margin-top: -48px;
    z-index: 1;
`;

const StyledArrovRight = styled(Arrow)`
    position: absolute;
    top:50%;
    margin-top: -48px;
    right: 0px;
    z-index: 1;
`