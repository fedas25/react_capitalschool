import React from "react"
import styled from "styled-components";
import NavBar from "./../../components/layout/navigation/NavBar"
import Header from "./Header"
import MakesUsSpecial from "./MakesUsSpecial"

export default function Main() {

    const Container = styled.div`
        display: flex;
        padding: 168px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 168px;
    `;

    return (
        <>
                <NavBar />
                <Header />
            <Container>
                <MakesUsSpecial />
            </Container>
        </>
    )
}