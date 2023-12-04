import React, { useState } from 'react';
import styled from "styled-components"
import Font1920_h3 from "./../fonts/desktop/1920_h3"
import Font1920_h4 from "./../fonts/desktop/1920_h4"
import Font1920_h5 from "./../fonts/desktop/1920_h5"
import Font1920_p1 from "./../fonts/desktop/1920_p1"
import Arrow from "../../components/Arrow"
import crossExit from "./../../assets/CrossExit.svg"
import Button from "../../components/Button"
import DarkenedBackground from '../DarkenedBackground';
import topStars from "./../../assets/topStars.svg"
import lowerStars from "./../../assets/lowerStars.svg"

const CrossExit = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  right: -40px;
  top: -100px;
  cursor: pointer;
  z-index: 12;
`;

const StyledFont1920_h5 = styled(Font1920_h5)`
    margin-bottom: 48px;
`

function Question({ handler, btn = false, handlerResult = null }) {
    return (
        <CardQuestion>
            <StyledNavigation />
            <StyledFont1920_h5 test>Сколько букв в английском алфавите?</StyledFont1920_h5>
            <ResponseOptions>
                <Options>
                    <StyledInput />
                    <Font1920_p1 gray>
                        ESOL (C1)
                    </Font1920_p1>
                </Options>
            </ResponseOptions>
            <ResponseOptions>
                <Options>
                    <StyledInput />
                    <Font1920_p1 gray>
                        ESOL (C1)
                    </Font1920_p1>
                </Options>
            </ResponseOptions>
            <ResponseOptions>
                <Options>
                    <StyledInput />
                    <Font1920_p1 gray>
                        ESOL (C1)
                    </Font1920_p1>
                </Options>
            </ResponseOptions>
            <ResponseOptions>
                <Options>
                    <StyledInput />
                    <Font1920_p1 gray>
                        ESOL (C1)
                    </Font1920_p1>
                </Options>
            </ResponseOptions>
            {btn ?
                <ButtonContainer>
                    <Button title="отправить" handler={handlerResult} />
                </ButtonContainer>
                : null}
        </CardQuestion>

    )
}


const Container = styled.div`
    background-color: #fff;
    padding: 64px 32px 128px 32px;
    top: 10%;
    left: 50%;
    margin-left: -400px;
    position: fixed;
    border-radius: 50px;
    z-index: 2;
    display: ${(props) => props.show == false ? "none" : "block"} ;
    
    .topStars {
        pointer-events: none;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 50px;
    }
    .lowerStars {
        pointer-events: none;
        position: absolute;
        bottom: 0px;
        left: 0px;
        border-radius: 50px;
    }
    `;

const Content = styled.div`
    display: flex;
    width: ${({ result }) => result ? "746px" : "800px"} ;
    position: relative;
    overflow: hidden;
`;

export default function Test({ show, setShow }) {
    const [offset, setOffset] = useState(0);
    function handlerLeft() {
        setOffset(offset + 800);
    }
    function handlerRight() {
        setOffset(offset - 800);
    }

    const [isResult, setisResult] = useState(0);

    return (
        <>
            <DarkenedBackground show={+show}>
                <Container show={+show}>
                    <CrossExit src={crossExit} onClick={() => { setShow(false); setisResult(0); setOffset(0) }} />
                    {isResult ?
                        <>
                            <img src={topStars} className='topStars' alt="topStars" />
                            <img src={lowerStars} className='lowerStars' alt="lowerStars" />
                        </>
                        :
                        <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />
                    }

                    <Content result={isResult}>
                        {isResult ?
                            <Result>
                                <p>
                                    <Font1920_h3>
                                        Ваш уровень английского — B2
                                    </Font1920_h3>
                                </p>
                                <Font1920_p1 gray>
                                    Развивайте свой англиский вместе с нами. Благодаря нашим онлайн-курсам ваш уровень английского достигнет новых высот. Присоединяйтесь к нам и сделайте английский вашим надежном и верным другом в любой ситуации.
                                </Font1920_p1>
                                <div>
                                    <Button title="Записаться на пробное занятие" />
                                </div>
                            </Result>
                            :
                            <ListCards offset={offset}>
                                <Question handler={() => { setShow(false) }} />
                                <Question handler={() => { setShow(false) }} />
                                <Question handler={() => { setShow(false) }} />
                                <Question handler={() => { setShow(false) }} />
                                <Question btn handlerResult={() => { setisResult(1) }} handler={() => { setShow(false); setOffset(0) }} />
                            </ListCards>
                        }
                    </Content>

                </Container>
            </DarkenedBackground>
        </>
    )
}

const Result = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
gap: 48px;
    p {
        width: 622px; 
    }
    div {
        display: flex;
        justify-content: center;
    }
`;



const ListCards = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    transform: ${({ offset }) => `translateX(${offset}px)`} ;
    transition: transform 400ms;
`

const ButtonContainer = styled.div`
margin-top: 48px;
    display: flex;
    justify-content: center;
`

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
            <StyledCardNumber cardNumber="1" numberOfCards="12" />
        </div>
    )
}








const CardQuestion = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
`

const StyledNavigation = styled(Navigation)`
      width: 800px;
      height: 100px;
      margin-bottom: 64px;
      display: flex;
      align-items: center;
  `;

const ResponseOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`

const Options = styled.div`
    height: 48px;
    display: flex;
    gap: 12px;
    align-items: center;
`

function Input({ className }) {
    return <input type="radio" id="radioButton" className={className} name="dzen" value="nedzen" />
}

const StyledInput = styled(Input)`
    margin-left: 22px;
    margin-right: 18px;
    transform:scale(3.6);
`


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
      top: 64px;
      right: 32px;
  `;
