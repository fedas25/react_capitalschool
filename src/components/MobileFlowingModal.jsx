import React from 'react'
import styled from 'styled-components'
import DarkenedBackground from './DarkenedBackground';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  overflow: hidden;
  height: ${({ show }) => show ? "90vh" : "0px"} ;
  transition: height .4s linear;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 1;
`;

export default function MobileFlowingModal({ show, children }) {
  console.log("!!!");
  return (
    <Container show={+show}>
      <DarkenedBackground show={+show}></DarkenedBackground>
      {children}
    </Container>
  )
}
