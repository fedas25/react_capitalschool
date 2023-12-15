import React from "react"
import styled from "styled-components"
import H2 from "./../../components/fonts/desktop/1920_h2"
import P1 from "./../../components/fonts/desktop/1920_p1"
import ABC from "./../../assets/ABC.png"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 168px;
    @media (max-width: 768px) {
        margin: 80px 0;
    }
`;

const Content = styled.div`
    display: flex;
    width: 1664px;
    @media (max-width: 768px) {
        width: 320px;
        flex-direction: column-reverse;
        gap: 64px;
    }
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.div`
    width: 818px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    @media (max-width: 768px) {
        width: 320px;
        gap: 18px;
    }
`;

const Icon = styled.img`
    width: 679px;
    height: 310px;
    position: relative;
    left: -26px;
    @media (max-width: 768px) {
        width: 320px;
        height: 154px;
    }
`;

export default function Header() {
    return (
        <>
            <Container>
                <Content>
                    <Text>
                        <H2>A1 (Beginner Level)</H2>
                        <P1 gray>Онлайн-курс предназначен для абсолютных начинающих.
                            Мир английского языка через базовые фразы,
                            простые диалоги и повседневную лексику.
                        </P1>
                    </Text>
                    <Icon src={ABC}/>
                </Content>
            </Container>
        </>
    )
}