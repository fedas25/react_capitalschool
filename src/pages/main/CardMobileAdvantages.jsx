import React from 'react';
import styled from "styled-components";

import H4 from "./../../components/fonts/desktop/1920_h4.jsx"
import P2 from "./../../components/fonts/desktop/1920_p2"
import calendar from "./../../assets/calendar.svg"

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

export default function CardMobileAdvantages() {
    return (
        <CardMobileMakesUsSpecial>
            <div>
                <img src={calendar} alt="calendar" />
            </div>
            <div>
                <H4>Гибкий график</H4>
            </div>
            <div>
                <P2>
                    Вы сами определяете удобное для себя время для занятий. Мы предлагаем гибкость в расписании, чтобы адаптироваться к вашим занятостям и обстоятельствам
                </P2>
            </div>
        </CardMobileMakesUsSpecial>
    )
}
