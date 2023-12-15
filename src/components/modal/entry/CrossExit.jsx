import React from 'react'
import styled from 'styled-components'
import crossExit from "./../../../assets/CrossExit.svg"

const StyledCrossExit = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  right: -40px;
  top: -80px;
  cursor: pointer;
`;

export default function CrossExit({handler = () => {}}) {
  return <StyledCrossExit src={crossExit} onClick={handler} />
}
