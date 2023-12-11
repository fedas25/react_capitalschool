import React, { useState, useContext, createContext } from 'react';
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Button from "../../components/Button"
import level from "../../assets/lavel.jpg";
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    `;

const Content = styled.div`
        display: flex;
        width: 1664px;
        @media (max-width: 768px) {
            width: 320px;
            flex-direction: column;
        }
        align-items: center;
        justify-content: space-between;
    `;

const Information = styled.div`
        width: 820px;
        @media (max-width: 768px) {
            width: 320px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .center{
            width: 100%;
            display: flex;
            justify-content: center;
        }
    `;

const Image = styled.img`
        width: 400px;
        height: 600px;
        @media (max-width: 768px) {
            width: 320px;
            height: 420px;
            margin-bottom: 48px;
        }
        border-radius: 50px;
    `;

const Description = styled.span`
        width: 820px;
        margin-bottom: 40px;
        @media (max-width: 768px) {
            width: 320px;
            margin-bottom: 32px;
        }
    `;

const Text = styled.span`
        margin-bottom: 48px;
        width: 820px;
        @media (max-width: 768px) {
            width: 320px;
            margin-bottom: 40px;
        }
    `;


export default function EnglishLevelTest({ setShow }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            <Container>
                <Content>
                    <Information>
                        {isMobile && <Image src={level} />}
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
                        {isMobile ?
                            <div className='center'>
                                <Button test title="Пройти тест" handler={() => { setShow(true) }} />
                            </div>
                            :
                            <Button title="Пройти тест" handler={() => { setShow(true) }} />
                        }
                    </Information>
                    {!isMobile && <Image src={level} />}
                </Content>
            </Container>
        </>
    )
}
