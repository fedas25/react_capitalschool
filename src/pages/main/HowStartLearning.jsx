import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from '@react-spring/web';
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h3 from "./../../components/fonts/desktop/1920_h3"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Arrow from "../../components/Arrow"
import Button from "../../components/Button"
import map from "./../../assets/map.jpg"

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 96px;
`;

const Description = styled.p`
    width: 1664px;
    font-size: 65px;
    color: black;
`;

const Content = styled.div`
    display: flex;
    width: 1664px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`;

function cardNumber({ className, cardNumber, numberOfCards }) {
    return (
        <span className={className}>
            <Font1920_h4>
                {cardNumber} / {numberOfCards}
            </Font1920_h4>
        </span>
    )
}

const Image = styled.img`
    width: 400px;
    height: 600px;
    border-radius: 50px;
`;

const StyledCardNumber = styled(cardNumber)`
    color: #BCBCC5;
    font-feature-settings: 'case' on;
    `;

function Navigation({ className }) {
    return (
        <div className={className}>
            <StyledCardNumber cardNumber="1" numberOfCards="12" />
        </div>
    )
}

const StyledNavigation = styled(Navigation)`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
`;

const Information = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Heading = styled.span`
    margin-bottom: 40px;
    width: 820px;
`;

const Text = styled.span`
    margin-bottom: 48px;
    width: 820px;
`;

function NavigationButton({ className, handler }) {
    return (
        <div className={className}>
            <Arrow handle={handler.left} />
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

const Stages = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    position: relative;
    /* transform: translateX(100px); */
    /* transition-duration: 200ms; */
`;

const AnimatedStages = animated(Stages);

const StageContainer = styled.div`
display: flex;
justify-content: space-between;
width: 1668px;
`;

function Stage() {
    return (
        <StageContainer>
            <Image src={map} />
            <Information>
                <StyledNavigation />
                <Heading>
                    <Font1920_h3>
                        Узнайте свой уровень английского
                    </Font1920_h3>
                </Heading>
                <Text>
                    <Font1920_p1 gray>
                        Мы заботимся о том, чтобы каждый студент обучался на своём уровне, поэтому рекомендуем пройти наш тест на определение уровня.
                        Это поможет нам точно определить ваш стартовый уровень и предложить наиболее подходящую программу обучения.
                        ляляляляляля
                    </Font1920_p1>
                </Text>
                <Button title="пройти тест" />
            </Information>
        </StageContainer>
    )
}

export default function HowStartLearning() {
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
        setTo(to + 1668);
    }
    function handlerRight() {
        setFrom(to);
        setTo(to - 1668);
    }
    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Как начать обучение?</Font1920_h2>
                </Description>
                <Content>
                    <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />
                    <AnimatedStages style={springs}>
                        <Stage />
                        <Stage />
                        <Stage />
                        <Stage />
                        <Stage />
                        <Stage />
                    </AnimatedStages>
                </Content>
            </Container>
        </>
    )
}
