import React, { Children, useState } from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h3 from "./../../components/fonts/desktop/1920_h3"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Arrow from "../../components/Arrow"
import Button from "../../components/Button"
import map from "./../../assets/map.jpg"
import CaruselMobile from "../../components/CaruselMobile"
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 96px;
    @media (max-width: 768px) {
        gap: 48px;
        margin: 80px 0;
    }
`;

const Description = styled.div`
    width: 1664px;
    position: relative;
    @media (max-width: 768px) {
        width: 320px;
    }
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

const StyledCardNumber = styled(cardNumber)`
    color: #BCBCC5;
    font-feature-settings: 'case' on;
    `;

function Navigation({ className }) {
    return (
        <div className={className}>
            <Image src={map} />
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
    @media (max-width: 768px) {
        align-items: start;
        height: auto;
        margin-bottom: 48px;
    }
`;

const Information = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .center{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const Heading = styled.span`
    margin-bottom: 40px;
    width: 820px;
    @media (max-width: 768px) {
        width: 320px;
        margin-bottom: 32px;
    }
`;

const Text = styled.span`
    margin-bottom: 48px;
    width: 820px; 
    @media (max-width: 768px) {
        margin-bottom: 40px;
        width: 320px;
    }
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
    z-index: 1;
    top: 0px;
    @media (max-width: 768px) {
        top: 156px;
    }
    right: 0px;
    
`;



const StagesCaruselStyled = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    position: relative;
    transform: ${({ offset }) => `translateX(${offset}px)`} ;
    transition: transform 800ms;
`;



// проблемма с несколькимы вызовами setCountStages на каждое отображение
// карточки этапа ( нужно кол-во этапов получать один раз при отрисовке страницы )
function StagesCarusel({ setCountStages, offset, children }) {
    setCountStages(children.length)
    return (
        <StagesCaruselStyled offset={offset}>
            {children}
        </StagesCaruselStyled>
    )

}



const StageContainer = styled.div`
display: flex;
justify-content: space-between;
width: 1668px;
@media (max-width: 768px) {
    width: 320px;
}
`;


const Image = styled.img`
    width: 400px;
    height: 600px;
    border-radius: 50px;
    @media (max-width: 768px) {
        width: 193px;
        height: 167px;
        border-radius: 25px;
    }
`;

function Stage({ setShow, isMobile }) {
    return (
        <StageContainer>
            {!isMobile && <Image src={map} />}
            <Information>
                {isMobile && <StyledNavigation />}
                <Heading>
                    <Font1920_h3>
                        Пройдите тест на определение уровня
                    </Font1920_h3>
                </Heading>
                <Text>
                    <Font1920_p1 gray>
                        Мы заботимся о том, чтобы каждый студент обучался на своём уровне, поэтому рекомендуем пройти наш тест на определение уровня.
                        Это поможет нам точно определить ваш стартовый уровень и предложить наиболее подходящую программу обучения.
                        ляляляляляля
                    </Font1920_p1>
                </Text>
                <div className={isMobile && "center"}>
                    <Button test title="пройти тест" handler={() => { setShow(true) }} />
                </div>
            </Information>
        </StageContainer>
    )
}

export default function HowStartLearning({ setShow }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const [offset, setOffset] = useState(0);
    const [numberStages, setNumberStages] = useState(0);

    function handlerLeft() {
        if (offset != 0) { // проверка на выход за границу
            setOffset(offset + 1);
        }
    }

    function handlerRight() { // проверка на выход за границу
        if (offset != (numberStages - 1) * (-1)) {
            setOffset(offset - 1);
        }
    }

    function setCountStages(count) {
        setNumberStages(count)
    }

    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Как начать обучение?</Font1920_h2>
                    {isMobile && <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />}
                </Description>
                {isMobile ?
                    <>
                        <CaruselMobile external noNavigation externalHandlerLeft={handlerLeft} externalHandlerRight={handlerRight} externalCardNumber={offset}>
                            <Stage setShow={setShow} isMobile={isMobile} />
                            <Stage setShow={setShow} isMobile={isMobile} />
                            <Stage setShow={setShow} isMobile={isMobile} />
                            <Stage setShow={setShow} isMobile={isMobile} />
                        </CaruselMobile>
                    </> :
                    <>
                        <Content>
                            <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />
                            <StagesCarusel offset={offset * 1668} setCountStages={setCountStages}>
                                <Stage setShow={setShow} />
                                <Stage setShow={setShow} />
                            </StagesCarusel>
                        </Content>
                    </>
                }
            </Container>
        </>
    )
}
