import React from 'react'
import styled from 'styled-components';

const Course = styled.div`
        display: flex;
        padding: 10px 18px 12px 18px;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: ${(props) => ((props.color) ? props.color : "#D793E3")};
`;

export default function BadgeCource({color, children}) {
  return (
    <Course color={color}>
        {children}
    </Course>
  )
}
