import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  ${props => !props.completed ? `display: flex; 
                                 flex-direction: column;
                                 align-items: center;
                                 padding: 112px 32px 128px;`
                                 :
                                 `padding: 64px 32px 128px;`}
  width: 650px;
  border-radius: 50px;
  top:12%;
  left: 50%;
  margin-left: -325px;
  z-index: 1;
`;

export default function MainContainer({children, activityBeenCompleted = false}) {
  return (
    <Container completed={+activityBeenCompleted}>
        {children}
    </Container>
  )
}
