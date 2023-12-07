import React from "react"
import styled from "styled-components"
import Button from "../../components/Button";
import Font1920_h1 from "../../components/fonts/desktop/1920_h1"
import Font1920_p1 from "../../components/fonts/desktop/1920_p1"
import vetka from "./../../assets/vetka.png"

const Div = styled.div`
        position: relative;
        display: flex;
        width: 100%;
        padding: 132px 128px;
        @media (max-width: 768px) {
            padding: 72px 16px;
        }
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        @media (max-width: 768px) {
            gap: 32px;
        }
        background-color: #6B73C2;
        overflow-x: clip;
        
    `;

const Vetka = styled.img`
        position: absolute;
        width: 720px;
        height: 1008px;
        @media (max-width: 768px) {
            width: 560px;
            height: 426px;
        }
        right: -120px;
        bottom: -276px;
        @media (max-width: 768px) {
            right: -114px;
            bottom: -122px;
        }
        transform: rotate(1deg);
    `;

const Center = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export default function Header() {

    return (
        <>
            <Div>
                <Vetka src={vetka} alt="vetka" />
                <Font1920_h1>
                    Высокий уровень английского<br />
                    без стресса и неудобств
                </Font1920_h1>
                <Font1920_p1>
                    Присоединяйтесь к нашим онлайн-курсам и дайте <br />
                    нам возможность помочь вам достичь языковых целей.<br />
                    С нами английский станет вашим надёжным и верным<br />
                    другом в любой ситуации.<br />
                </Font1920_p1>
                <Center>
                    <Button title="Записаться на пробное занятие" />
                </Center>
            </Div>
        </>
    )
}