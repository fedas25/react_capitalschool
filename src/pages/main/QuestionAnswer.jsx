import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import openingCross from "../../assets/openingCross.png"

const Container = styled.div`
    width: 100%;
    margin: 0 auto 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 96px;
    @media (max-width: 768px) {
        gap: 48px;
    }
`;

const Description = styled.p`
    width: 1664px;
    @media (max-width: 768px) {
        width: 320px;
    }
    color: black;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 2px solid #E4E4E7;
    width: 1664px;
    @media (max-width: 768px) {
        width: 320px;
    }
`;

const OpeningCross = styled.img`
    width: 96px;
    height: 96px;
    @media (max-width: 768px) {
        width: 56px;
        height: 56px;
    }
    cursor: pointer;
    transform: ${(props) => props.show == false ? "rotate(0)" : "rotate(-45deg)"};
    transition: transform 200ms linear;
`;

const Text = styled.p`
    display: flex;
    max-width: 1350px;
    margin-left: 24px;
    height: 126px;
    @media (max-width: 768px) {
        height: auto;
        margin-left: 0px;
    }
    align-items: center;
`

function Question({ handler, className, children, show }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    function handlerMobile(e) {
        handler();
        e.stopPropagation();
    }

    return (
        <div className={className} onClickCapture={isMobile ? handlerMobile : () => {}}>
            <Text>
                <Font1920_h4 black question>
                    {children}
                </Font1920_h4>
            </Text>
            <OpeningCross src={openingCross} onClick={handler} show={show} />
        </div>
    )
}

const StyledQuestion = styled(Question)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Answer = styled.div`
width: 1100px;
margin-left: 24px;
@media (max-width: 768px) {
    width: 320px;
    margin-left: auto;
}
margin-top: ${(props) => props.show == false ? "0px" : "32px"};
max-height: ${(props) => props.show == false ? "0px" : "350px"};
overflow: hidden;
transition: max-height 300ms linear, margin-top 150ms linear;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Cell = styled.div`
    width: 100%;
    border-bottom: 2px solid #E4E4E7;
    padding: 40px 0;
    @media (max-width: 768px) {
        width: 320px;
        padding: 24px 0;
    }
`;

function QuestionCell({ question, answer }) {

    const [show, setShow] = useState(false);

    function handler() {
        setShow(!show);
    }

    return (
        <Cell>
            <StyledQuestion handler={handler} show={+show}>
                {question}
            </StyledQuestion>
            <Answer show={+show}>
                <Font1920_p1 gray>
                    {answer}
                </Font1920_p1>
            </Answer>
        </Cell>
    )
}

export default function QuestionAnswer({ map }) {
    {/* ПОСМОТРЕТЬ УРОКИ по STYLED-COMPONENT
    ДЛЯ ПОНИМАНИЯ КАК работать с синтаксисом sass */}
    const list = [
        {
            question: "Какой уровень английского языка подходит для Какой уровень английского языка подходит для обучения в вашей школе?",
            answer: "Банальные, но неопровержимые выводы, а также стремящиеся вытеснить традиционное производство, нанотехнологии будут объективно рассмотрены соответствующими инстанциями. А также интерактивные прототипы рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Равным образом, базовый вектор развития способствует подготовке и реализации существующих финансовых и административных условий."
        },
        {
            question: "Какой уровень английского языка подходит для Какой уровень английского языка подходит для обучения в вашей школе?",
            answer: "Банальные, но неопровержимые выводы, а также стремящиеся вытеснить традиционное производство, нанотехнологии будут объективно рассмотрены соответствующими инстанциями. А также интерактивные прототипы рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Равным образом, базовый вектор развития способствует подготовке и реализации существующих финансовых и административных условий."
        },
        {
            question: "Какой уровень английского языка подходит для Какой уровень английского языка подходит для обучения в вашей школе?",
            answer: "Банальные, но неопровержимые выводы, а также стремящиеся вытеснить традиционное производство, нанотехнологии будут объективно рассмотрены соответствующими инстанциями. А также интерактивные прототипы рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Равным образом, базовый вектор развития способствует подготовке и реализации существующих финансовых и административных условий."
        },
    ];

    const listQuestionCell = list.map((item) => <QuestionCell question={item.question} answer={item.answer} />)

    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Вопросы и ответы</Font1920_h2>
                </Description>
                <Content>
                    {listQuestionCell}
                </Content>
            </Container>
        </>
    )
}
