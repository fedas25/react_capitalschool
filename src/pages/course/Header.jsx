import React from "react"
import styled from "styled-components"
import H2 from "./../../components/fonts/desktop/1920_h2"
import P1 from "./../../components/fonts/desktop/1920_p1"
import ABC from "./../../assets/ABC.png"

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 168px;
`;

const Content = styled.div`
    display: flex;
    width: 1664px;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.div`
    width: 818px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`;

const Icon = styled.img`
    width: 679px;
    height: 310px;
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