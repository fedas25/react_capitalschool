import React from "react"
import styled from "styled-components"
import Button from "../../components/Button";
import Font1920_h1 from "./../../components/fonts/desktop/1920_h1"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import vetka from "./../../assets/vetka.png"

export default function Header() {
    const Div = styled.div`
        display: flex;
        width: 100%;
        padding: 132px 128px;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;
        background-color: #6B73C2;
        overflow: hidden;
    `;

    function Vetka({ className }) {
        return (
            <img className={className} src={vetka} alt="vetka" />
        )
    }

    const StyledVetka = styled(Vetka)`
        position: absolute;
        width: 720px;
        height: 1008px;
        right: -120px;
        bottom: -162px;
        transform: rotate(1deg);
    `;

    return (
        <>
            <Div>
                <StyledVetka />
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