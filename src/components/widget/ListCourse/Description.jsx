import React from 'react'
import styled from 'styled-components';
import Font1920_h2 from "./../../fonts/desktop/1920_h2"

const Description = styled.p`
max-width: 1664px;
@media (max-width: 768px) {
    max-width: 320px;
}
color: black;
`;

export default function Main() {
    return (
        <Description>
            <Font1920_h2>Погрузитесь в потрясающий мир спокойного обучения</Font1920_h2>
        </Description>
    )
}
