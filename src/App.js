import React from "react";
import styled from 'styled-components'
import StyledText from './components/fonts/desktop/text'

export default function App() {

    const Wrapper = styled.div`
        height: 900px;
        width: 800px;
        display: flex;
        flex-direction: column;
        background-color: #cfcfcf;;
    `

    return(
        <Wrapper>
            <StyledText>h1 1920  (85, 100%) Высокий уровень английского без стресса</StyledText>
        </Wrapper>
    )
}