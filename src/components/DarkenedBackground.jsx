import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    height: 101vh;
    width: 101vw;
    background-color: rgba(55,61,66,.5019607843137255);
    left: -1px;
    top: -1px;
    z-index: 1;
`;

export default function DarkenedBackground({ children, show = true }) {
    
    if (show == false) return null

    return (
        <Container>
            {children}
        </Container>
    );
}