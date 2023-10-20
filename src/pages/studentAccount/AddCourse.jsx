import React from 'react'
import styled from 'styled-components';
import FontButton from "./../../components/fonts/desktop/1920_button"
import OpeningCross from "./../../assets/openingCross.png"

const Img = styled.img`
    height: 64px;
    width: 64px;
`;

function ComponentAddCourse({ className }) {
    return (
        <div className={className}>
            <Img src={OpeningCross} alt="OpeningCross" />
            <FontButton color="gray">Добавить курс</FontButton>
        </div>
    )
}

const StyledAddCourse = styled(ComponentAddCourse)`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 12px;
`;

export default function AddCourse() {
  return (
    <StyledAddCourse />
  )
}
