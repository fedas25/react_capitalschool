import React from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_h5 from "./../../components/fonts/desktop/1920_h5"
import Font1920_p2 from "./../../components/fonts/desktop/1920_p2"
import academicCap from "./../../assets/feature/academicCap.svg"
import book from "./../../assets/feature/book.svg"
import message from "./../../assets/feature/message.svg"
import payCard from "./../../assets/feature/payCard.svg"
import user from "./../../assets/feature/user.svg"

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
        gap: 72px;
        border-top: 2px solid var(--srt, #E4E4E7);
    `;

    const Left = styled.div`
        height: 1516px;
        width: 571px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `;

    const Right = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
        flex: 1 0 0;
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

    const CardsFeature = styled.div`
        display: flex;
        align-items: flex-start;
        gap: 48px;
        align-self: stretch;
    `;

    const FeatureCardStyled = styled(featureCard)`
        max-width: 488px;
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
                    <Font1920_h2>Что делает нас особенными ?</Font1920_h2>
                </Description>
                <Content>
                    <Left>
                        <Font1920_h4>Удобный, доступный и эффективный английский</Font1920_h4>
                        <Font1920_h4>Индивидуальные уроки</Font1920_h4>
                        <Font1920_h4>Эффективные методики</Font1920_h4>
                    </Left>
                    <Right>
                        <CardsFeature>
                            <FeatureCardStyled
                                icon={user}
                                headline="Индивидуальный подход"
                                description="Мы заботимся о том, чтобы каждый ученик получил индивидуальное внимание и поддержку в своих учебных усилиях. Ведь для нас каждый ученик уникален и важен."
                            />
                            <FeatureCardStyled
                                icon={message}
                                headline="Разговорный английский"
                                description="Мы понимаем важность практики разговорного английского, поэтому в наших курсах уделяется особое внимание разговорной практике. У вас будет возможность участвовать в диалогах с преподавателем и другими студентами, а также применять полученные знания на практике в реальных ситуациях."
                            />
                        </CardsFeature>
                        <CardsFeature>
                            <FeatureCardStyled
                                icon={book}
                                headline="Лучшие учебные пособия"
                                description="Академические материалы основаны на лучших учебных пособиях, таких издательств как McMillan, Pearson, Cambridge Press и заданий, написанных нашими специалистами."
                            />
                            <FeatureCardStyled
                                icon={payCard}
                                headline="Удобный способ оплаты"
                                description="Оплата производиться через сервис Юkassa. Юkassa предоставляет множество вариантов оплаты, включая банковские карты (Visa, Mastercard, Мир и другие) и электронные кошельки. Вы можете выбрать тот тип оплаты, который будет удобен для вас: оплата за каждое занятие отдельно или за полный курс со скидкой в размере 15%. Это позволит значительно сэкономить. Не упустите возможность пройти курс по выгодной цене и улучшить свои навыки."
                            />
                        </CardsFeature>
                        <CardsFeature>
                            <FeatureCardStyled
                                icon={academicCap}
                                headline="Преподаватели — настоящие профессионалы"
                                description="Наши преподаватели обладают богатым опытом и используют интерактивные методики для вовлечения студентов в обучающий процесс."
                            />
                        </CardsFeature>
                    </Right>
                </Content>
            </Container>
        </>
    )
}
