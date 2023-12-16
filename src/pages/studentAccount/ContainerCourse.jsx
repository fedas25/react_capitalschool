import React from 'react'
import styled from 'styled-components'

const StyledCardCourseContainer = styled.div`
  width: 100%;
  padding: 64px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  gap: 48px;
  display: flex;
  border-bottom: 2px solid var(--srt, #E4E4E7);
`;

export default function ContainerCardCourse({children}) {
  return (
    <StyledCardCourseContainer>
        {children}
    </StyledCardCourseContainer>
  )
}
