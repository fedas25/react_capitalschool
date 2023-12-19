import React from 'react';
import styled from "styled-components";

import H4 from "./../../components/fonts/desktop/1920_h4.jsx"
import P2 from "./../../components/fonts/desktop/1920_p2"

const CardMobileMakesUsSpecial = styled.div`
    width: 320px;
    div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    div:nth-child(2) {
        margin-top: 24px;
    }
    div:nth-child(3) {
        margin-top: 16px;
    }
`;

export default function CardMobileAdvantages({ src, title, mainText }) {
    return (
        <CardMobileMakesUsSpecial>
            <div>
                <img src={src} alt="calendar" />
            </div>
            <div>
                <H4 black>{title}</H4>
            </div>
            <div>
                <P2>
                    {mainText}
                </P2>
            </div>
        </CardMobileMakesUsSpecial>
    )
}
