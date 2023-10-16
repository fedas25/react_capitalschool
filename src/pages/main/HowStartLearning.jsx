import React from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h3 from "./../../components/fonts/desktop/1920_h3"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Arrow from "../../components/Arrow"
import Button from "../../components/Button"

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
            <div>
                <Arrow />
                <Arrow right />
            </div>
        </div>
    )
}

const StyledNavigation = styled(Navigation)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
`;

const Information = styled.div`
    width: 1101px;
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

export default function HowStartLearning() {
    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Как начать обучение?</Font1920_h2>
                </Description>
                <Content>
                    <Image />
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
                </Content>
            </Container>
        </>
    )
}
