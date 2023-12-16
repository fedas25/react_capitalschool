import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 1664px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 96px;
    @media (max-width: 768px) {
        width: 80%;
        gap: 60px;
    }
`;

export default function ContainerArea({children}) {
  return (
    <Container>
        <Content>
            {children}
        </Content>
    </Container>
  )
}
