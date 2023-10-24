import React from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Button from "../../components/Button"
import level from "../../assets/lavel.jpg";

export default function EnglishLevelTest() {
    const Container = styled.div`
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    `;

    const Content = styled.div`
        display: flex;
        width: 1664px;
        align-items: center;
        justify-content: space-between;
    `;

    const Information = styled.div`
        width: 820px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `;

    const Image = styled.img`
        width: 400px;
        height: 600px;
        border-radius: 50px;
    `;

    const Description = styled.span`
        margin-bottom: 40px;
        width: 820px;
    `;

    const Text = styled.span`
        margin-bottom: 48px;
        width: 820px;
    `;

    return (
        <>
            <Container>
                <Content>
                    <Information>
                        <Description>
                            <Font1920_h2>
                                Узнайте свой уровень английского
                            </Font1920_h2>
                        </Description>
                        <Text>
                            <Font1920_p1 gray>
                                Этот краткий и увлекательный тест поможет нам понять ваш текущий уровень владения английским,
                                чтобы предложить вам именно тот курс,
                                который сооaтветствует вашим потребностям и целям.
                            </Font1920_p1>
                        </Text>
                        <Button title="пройти тест" />
                    </Information>
                    <Image src={level}/>
                </Content>
            </Container>
        </>
    )
}
