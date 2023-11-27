import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(55,61,66,.5019607843137255);
    z-index: 1;
`;

export default function DarkenedBackground({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}