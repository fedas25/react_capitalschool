import React from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h5 from "./../../components/fonts/desktop/1920_h5"
import Font1920_p2 from "./../../components/fonts/desktop/1920_p2"
import calendar from "./../../assets/advantages/calendar.svg"
import watch from "./../../assets/advantages/watch.svg"
import sofa from "./../../assets/advantages/sofa.svg"

export default function Header() {
    const Container = styled.div`
        width: 100%;
        display: flex;
        margin: 0 auto;
        padding: 0px 128px;
        align-items: flex-start;
        flex-direction: column;
        gap: 64px;
    `;

    const Description = styled.p`
        font-size: 65px;
        color: black;
    `;

    const Content = styled.div`
        display: flex;
        width: 100%;
        padding-top: 64px;
        align-items: flex-end;
        justify-content: center;
        gap: 48px;
        border-top: 2px solid var(--srt, #E4E4E7);
    `;


    const Icon = styled.img`
        height: 64px;
        width: 64px;
    `;

    function featureCard({ className, icon, headline, description }) {
        return (
            <div className={className}>
                <Icon src={icon} alt="icon feature" />
                <Font1920_h5>{headline}</Font1920_h5>
                <Font1920_p2>{description}</Font1920_p2>
            </div>
        )
    }

    const FeatureCardStyled = styled(featureCard)`
        max-width: 526
        px;
        display: flex;
        padding: 40px 0px;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    `;

    return (
        <>
            <Container>
                <Description>
                    <Font1920_h2>Что делает нас особенным?</Font1920_h2>
                </Description>
                <Content>
                    <FeatureCardStyled
                        icon={calendar}
                        headline="Гибкий график"
                        description="Вы сами определяете удобное для себя время для занятий. Мы предлагаем гибкость в расписании, чтобы адаптироваться к вашим занятостям и обстоятельствам."
                    />
                    <FeatureCardStyled
                        icon={watch}
                        headline="Свой темп"
                        description="У вас есть возможность изучать материалы в своём собственном темпе. Нет необходимости торопиться или задерживаться, вы сами контролируете скорость обучения."
                    />
                    <FeatureCardStyled
                        icon={sofa}
                        headline="Комфортные онлайн-уроки"
                        description="Наши занятия проводятся в удобной онлайн-среде. Вы можете учиться из дома или любого другого места, которое для вас комфортно, без необходимости тратить время на дорогу."
                    />
                </Content>
            </Container>
        </>
    )
}
