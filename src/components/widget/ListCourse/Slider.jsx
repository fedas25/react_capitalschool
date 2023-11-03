import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from '@react-spring/web';
import Arrow from "./../../Arrow.jsx"

export default function Slider({ children }) {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    const [springs, api] = useSpring(() => ({}))

    api.start({
        from: {
            x: from,
        },
        to: {
            x: to,
        },
    })

    function handlerLeft() {
        setFrom(to);
        setTo(to + 800);
    }
    function handlerRight() {
        setFrom(to);
        setTo(to - 800);
    }

    return (
        <Container>
            <StyledArrovLeft handle={handlerLeft}/>
            <StyledArrovRight handle={handlerRight} right />
            <AnimatedPageContainer style={springs}>
                {children}
            </AnimatedPageContainer>
        </Container>
    )
}


const Container = styled.div`
    /* min-height: 700px; */
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
    transition: translate;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    /* transition-duration: 500ms; рабатает*/
`;

const AnimatedPageContainer = animated(PageContainer);

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