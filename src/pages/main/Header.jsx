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
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        background-color: #6B73C2;
        overflow-x: clip;
        
    `;

    // function Vetka({ className }) {
    //     return (
    //         <img className={className} src={vetka} alt="vetka" />
    //     )
    // }

    const Vetka = styled.img`
        position: absolute;
        width: 720px;
        height: 1008px;
        right: -120px;
        bottom: -276px;
        transform: rotate(1deg);
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
                <Button title="Записаться на пробное занятие" />
            </Div>
        </>
    )
}