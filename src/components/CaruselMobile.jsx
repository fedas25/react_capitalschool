import React, { useState } from 'react';
import styled from "styled-components";

const ContainerPoints = styled.div`
    max-width: 236px;
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 6px;
`

const Point = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #6B73C2;
    opacity: ${({ active }) => active ? "0.8" : "0.20"};
    transition: opacity 400ms;
    `

function NavigationPoints({ numberOfCards, activeCard}) {
    const points = [];
    for (let i = 0; i < numberOfCards; i++) {
        points.push((i === activeCard) ? <Point active /> : <Point />)
    }

    return (
        <ContainerPoints>
            {points}
        </ContainerPoints>
    )
}


const PageContainer = styled.div`
    display: flex;
    gap: 24px;
    transform: ${({ offset }) => `translateX(${offset}px)`} ;
    transition: transform 400ms;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    width: 320px;
    position: relative;
    overflow: clip;
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;


export default function CaruselMobile({ children, externalShift = 0, noNavigation }) {
    const [cardNumber, setCardNumber] = useState(0);

    function handlerLeft() {
        setCardNumber(cardNumber - 1 + externalShift)
    }

    function handlerRight() {
        setCardNumber(cardNumber + 1 + externalShift)
    }


    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) return

        const currentTouch = e.touches[0].clientX
        const diff = touchPosition - currentTouch

        if (diff > 5) {
            handlerRight()
        }

        if (diff < -5) {
            handlerLeft()
        }

        setTouchPosition(null)
    }

    return (
        <>
            <Center>
                <Container
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <PageContainer
                        offset={cardNumber * -344}
                    >
                        {children}
                    </PageContainer>
                </Container>
                {!noNavigation && <NavigationPoints numberOfCards={children.length} activeCard={cardNumber} />}
            </Center>
        </>
    )
}