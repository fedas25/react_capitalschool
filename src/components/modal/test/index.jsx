import React, { useState } from 'react';
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
import Font1920_h3 from "../../fonts/desktop/1920_h3"
import Font1920_h4 from "../../fonts/desktop/1920_h4"
import Font1920_h5 from "../../fonts/desktop/1920_h5"
import Font1920_p1 from "../../fonts/desktop/1920_p1"
import Arrow from "../../Arrow"
import crossExit from "./../../../assets/CrossExit.svg"
import Button from "../../Button"
import DarkenedBackground from '../../DarkenedBackground';
import topStars from "./../../../assets/topStars.svg"
import lowerStars from "./../../../assets/lowerStars.svg"

const CrossExit = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  right: -40px;
  top: -100px;
  @media (max-width: 769px) {
    width: 56px;
    height: 56px;
    right: -2px;
    top: -62px;
  }
  cursor: pointer;
  z-index: 2;
`;

const StyledFont1920_h5 = styled(Font1920_h5)`
    margin-bottom: 48px;
`

function Question({ handler, btn = false, handlerResult = null }) {
    return (
        <CardQuestion>
            <StyledNavigation />
            <StyledFont1920_h5 test teacher>Сколько букв в английском алфавите?</StyledFont1920_h5>
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
                    <Button test title="отправить" handler={handlerResult} />
                </ButtonContainer>
                : null}
        </CardQuestion>

    )
}


const Container = styled.div`
    background-color: #fff;
    padding: 64px 32px 72px 32px;
    border-radius: 50px;
    margin-left: -400px;
    /* может быть когда-нибудь */
    /* padding: ${({ account }) => account ? "90px 32px 90px 32px" : "0px"} ; */
    @media (max-width: 768px) {
        margin-left: 0px;
        bottom: 0px;
        width: 100vw;
        border-radius: 40px 40px 0px 0px;
    }
    @media (min-width: 769px) {
        top: 10%;
        left: 50%;
    }
    position: fixed;
    z-index: 4;
    display: ${(props) => props.show == false ? "none" : "flex"} ;
    justify-content: center;
    
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
    @media (max-width: 768px) {
        width: 320px;
    }
    position: relative;
    overflow: hidden;
`;


function FinalScreen({ isAccount }) {
    return (
        <Result>
            {isAccount ?
                <Font1920_h3 result>Вы набрали 12 баллов из 72</Font1920_h3>
                :
                <>
                    <p>
                        <Font1920_h3 result>
                            Ваш уровень английского — B2
                        </Font1920_h3>
                    </p>
                    <Font1920_p1 gray>
                        Развивайте свой англиский вместе с нами. Благодаря нашим онлайн-курсам ваш уровень английского достигнет новых высот. Присоединяйтесь к нам и сделайте английский вашим надежном и верным другом в любой ситуации.
                    </Font1920_p1>
                    <div>
                        <Button test result title="Записаться на пробное занятие" />
                    </div>
                </>
            }
        </Result>
    )
}

export default function Test({ show, hideTest, isAccount = false }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const scrollingStep = isMobile ? 320 : 800;

    const [offset, setOffset] = useState(0);
    function handlerLeft() {
        setOffset(offset + scrollingStep);
    }
    function handlerRight() {
        setOffset(offset - scrollingStep);
    }
 
    const [isResult, setisResult] = useState(false);

    return (
        <>
            <DarkenedBackground show={+show}>
                <Container show={+show}>
                    <CrossExit src={crossExit} onClick={() => { hideTest(); setisResult(false); setOffset(0) }} />
                    {isResult ?
                        <>
                            <img src={topStars} className='topStars' alt="topStars" />
                            <img src={lowerStars} className='lowerStars' alt="lowerStars" />
                        </>
                        :
                        <StyledNavigationButton handler={{ left: handlerLeft, right: handlerRight }} />
                    }

                    <Content result={isResult}>
                        {isResult ? <FinalScreen isAccount/>
                            :
                            <ListCards offset={offset}>
                                <Question handler={hideTest} />
                                <Question handler={hideTest} />
                                <Question handler={hideTest} />
                                <Question handler={hideTest} />
                                <Question btn handlerResult={() => { setisResult(true) }} handler={() => { hideTest(); setOffset(0) }} />
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
        @media (max-width: 768px) {
            width: 320px;
        }
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
    margin-top: 28px;
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
    @media (max-width: 768px) {
        width: 320px;
    }
    display: flex;
    flex-direction: column;
`

const StyledNavigation = styled(Navigation)`
      width: 800px;
      height: 100px;
      @media (max-width: 768px) {
        width: 320px;
        height: auto;
    }
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
            <Arrow handle={handler.left} startLearning />
            <Arrow handle={handler.right} right startLearning />
        </div>
    )
}

const StyledNavigationButton = styled(NavigationButton)`
      position: absolute;
      z-index: 1;
      top: 64px;
      @media (max-width: 768px) {
        top: 51px;
      }
      right: 32px;
  `;
