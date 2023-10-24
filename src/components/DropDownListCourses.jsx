import React from 'react';
import styled from 'styled-components';
import H4 from "./fonts/desktop/1920_h4"

export default function DropDownListCourses() {
    const ContainerlistCourses = styled.div`
    position: absolute;
    width: 100%;
    padding: 96px 128px 120px 96px;
    display: flex;
    justify-content: end;
    background-color: #6B73C2;
    z-index: 1;
`;
    const List = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

    return (
        <ContainerlistCourses>
            <List>
                <H4 white>A1 (Beginner Level)</H4>
                <H4 white>A2 (Elementary Level)</H4>
                <H4 white>B1 (Intermediate Level)</H4>
                <H4 white>B2 (Upper-Intermediate Level)</H4>
                <H4 white>B1 (Intermediate Level)</H4>
                <H4 white>B2 (Upper-Intermediate Level)</H4>
                <H4 white>C1 (Intermediate Level)</H4>
                <H4 white>C2 (Upper-Intermediate Level)</H4>
            </List>
        </ContainerlistCourses>
    )
}