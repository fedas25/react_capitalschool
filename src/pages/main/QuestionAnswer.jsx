import React, { Children } from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import openingCross from "../../assets/openingCross.png"

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
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-top: 2px solid #E4E4E7;
    width: 1664px;
`;

const OpeningCross = styled.img`
    width: 96px;
    height: 96px;
`;

const Text = styled.p`
    display: flex;
    max-width: 1350px;
    height: 126px;
    align-items: center;
    margin: 40px 0px;
`

function Question({className, children}){
    return(
        <div className={className}>
            <Text>
                <Font1920_h4 black>
                {children}
            </Font1920_h4>
            </Text>
            <OpeningCross src={openingCross}/>
        </div>
    )
}

const StyledQuestion = styled(Question)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #E4E4E7;
    width: 100%;
`;

export default function QuestionAnswer() {
    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Вопросы и ответы</Font1920_h2>
                </Description>
                <Content>
                    <StyledQuestion>
                    Какой уровень английского языка подходит для
                    Какой уровень английского языка подходит для
                    обучения в вашей школе?
                    </StyledQuestion>
                    <StyledQuestion>
                    Какой уровень английского языка подходит для
                    обучения в вашей школе?
                    </StyledQuestion>
                </Content>
            </Container>
        </>
    )
}
