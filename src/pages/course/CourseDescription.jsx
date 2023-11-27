import React, { useState } from 'react'
import styled from 'styled-components'
import H3 from "./../../components/fonts/desktop/1920_h3"
import H4 from "./../../components/fonts/desktop/1920_h4"
import Font1920_h6 from "./../../components/fonts/desktop/1920_h6"
import Font1920_p1 from "./../../components/fonts/desktop/1920_p1"
import Font1920price from "./../../components/fonts/desktop/1920_price"
import Font1920aboute from "./../../components/fonts/desktop/1920_about"
import star from "./../../assets/star.png"
import jackdaw from "./../../assets/jackdaw.png"
import time from "./../../assets/time.svg"
import Font1920_h4 from "./../../components/fonts/desktop/1920_h4"
import H5 from "./../../components/fonts/desktop/1920_h5"
import openingCross from "../../assets/openingCross.png"
import Button from '../../components/Button'
import Recording from '../../components/modal/recording'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #EFEEF4;
`;

const Content = styled.div`
    width: 1664px;
    padding: 168px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 72px;
`;

const GeneralInformationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 138px;
`;

const GeneralInformation = styled.div`
    width: 679px;
    border-radius: 50px;
    background-color: #FFF;
    display: flex;
    padding: 64px 28px;
    flex-direction: column;
    align-items: flex-start;
`;

const Heading = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;

const TextContainer = styled.div`
    width: 844px;
`;

const Icon = styled.img`
    width: 96px;
    height: 96px;
`;



const Jackdaw = styled.img`
    width: 48px;
    height: 48px;
`;

const ListQualifications = styled.div`
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`;

function Qualification({ className, children }) {
    return (
        <div className={className}>
            <Jackdaw src={jackdaw} alt="jackdaw" />
            <Font1920_p1 gray>{children}</Font1920_p1>
        </div>
    )
}

const StyledQualification = styled(Qualification)`
    display: flex;
    align-items: center;
    gap: 12px;
`;

function qualifications({ className }) {
    return (
        <div className={className}>
            <ListQualifications>
                <StyledQualification>
                    ESOL (C1)
                </StyledQualification>
                <StyledQualification>
                    CPE (B2)
                </StyledQualification>
                <StyledQualification>
                    IELTS (8.5)
                </StyledQualification>
            </ListQualifications>
        </div>
    )
}

const StyledQualifications = styled(qualifications)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 48px;
`;











// вынести в компонент
const Div = styled.div`
display: flex;
align-items: flex-start;
gap: 12px;
`;

const SDiv = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

function perHour({ className }) {
    return (
        <div className={className}>
            <Font1920_h6>1 занятие</Font1920_h6>
            <Div>
                <Font1920price>1000 ₽</Font1920price>
                <SDiv>
                    <img src={time} alt="time" />
                    <Font1920aboute>1 час</Font1920aboute>
                </SDiv>
            </Div>
        </div>
    )
}

const StyledPerHour = styled(perHour)`
display: flex;
flex-direction: column;
justify-content: space-between;
`




// вынести

const DiscountQuantity = styled.div`
width: 72px;
height: 34px;
display: flex;
padding: 8px 12px;
justify-content: center;
align-items: center;
border-radius: 30px;
border: 2px solid var(--srt, #E4E4E7);
`;

function PriceNotDiscount({ className }) {
    return (
        <div className={className}>
            <Font1920aboute strikeout>72 000 ₽</Font1920aboute>

            <DiscountQuantity>
                <Font1920aboute discount>-40%</Font1920aboute>
            </DiscountQuantity>
        </div>
    )
}

const StyledPriceNotDiscount = styled(PriceNotDiscount)`
display: flex;
gap: 12px;
align-items: center;
`;

const ContainerPriceAllCource = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`;

function PerCourse({ className }) {
    return (
        <div className={className}>
            <Font1920_h6>полный курс</Font1920_h6>

            <ContainerPriceAllCource>
                <StyledPriceNotDiscount />
                <Div>
                    <Font1920price>11 000 ₽</Font1920price>
                    <SDiv>
                        <img src={time} alt="time" />
                        <Font1920aboute>72 часа</Font1920aboute>
                    </SDiv>
                </Div>
            </ContainerPriceAllCource>

        </div>
    )
}

const StyledPerCourse = styled(PerCourse)`
display: flex;
flex-direction: column;
justify-content: space-between;
`


























function Prices({ className }) {
    return (
        <div className={className}>
            <StyledPerHour />
            <StyledPerCourse />
        </div>
    )
}

const StyledPrices = styled(Prices)`
margin: 48px 0 64px 0;
height: 147px;
display: flex;
gap: 42px;
`;













const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


const CourseProgramContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 138px;
`;

const TextContainerCourseProgram = styled.div`
    width: 538px;
`;






const ContainerQuestionAnswer = styled.div`
display: flex;
width: 961px;
padding: 64px 28px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50px;
background-color: #FFF;
border-top: 2px solid #E4E4E7;
`;

const ContentFAQ = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 2px solid #E4E4E7;
    width: 905px;
`;




const Text = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1350px;
    height: 126px;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
    margin: 40px 0px;
`


const OpeningCross = styled.img`
    width: 96px;
    height: 96px;
    cursor: pointer;
    transform: ${(props) => props.show == false ? "rotate(0)" : "rotate(-45deg)"};
    /* padding-bottom: ${(props) => props.show == false ? "0" : "40px"}; */
    transition: transform 200ms linear, padding-bottom 200ms linear;
`;

function Question({ className, children, time, handler, show }) {
    return (
        <div className={className}>
            <Text>
                <Font1920_h4 black>
                    {children}
                </Font1920_h4>
                <H5 gray>24 часа</H5>
            </Text>
            <OpeningCross show={show} src={openingCross} onClick={handler} />
        </div>
    )
}

const StyledQuestion = styled(Question)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 2px solid #E4E4E7; */
    width: 100%;
`;

const Answer = styled.div`
width: 905px;
/* margin-top: ${(props) => props.show == false ? "0px" : "32px"}; */
max-height: ${(props) => props.show == false ? "0px" : "300px"};
padding-bottom: ${(props) => props.show == false ? "0" : "40px"};
transition: max-height 200ms linear, padding-bottom 200ms linear;
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
`;

function QuestionAnswer() {
    const [show, setShow] = useState(false)

    function handler() {
        setShow(!show)
    }
    return (
        <>
            <ContentFAQ>
                <StyledQuestion handler={handler} show={show}> Этап 1 </StyledQuestion>
                <Answer show={+show}>
                    <Font1920_p1 gray>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo suscipit mollitia in laudantium voluptates! Explicabo, sit voluptas. Consectetur ipsam pariatur tempore aut, eligendi alias sapiente excepturi in facilis officiis earum.
                    </Font1920_p1>
                </Answer>
            </ContentFAQ>
        </>
    )
}










export default function CourseDescription() {
    const [IsDisplayRecord, setIsDisplayInformation] = useState(false)
    function hideFullRecord() { setIsDisplayInformation(false) }
    function ShowFullRecord() { setIsDisplayInformation(true) }

    return (
        <>
            <Container>
                {/* модалки */}
                {IsDisplayRecord ? <Recording handlerClick={hideFullRecord} test /> : null}
                {/* модалки */}
                <Content>
                    <GeneralInformationContainer>
                        <GeneralInformation>
                            <Heading>
                                <H4 black>Идеальное начало языкового путешествия</H4>
                                <Icon src={star} />
                            </Heading>
                            <StyledQualifications />
                            <StyledPrices />
                            <ButtonContainer>
                                <Button title="Записаться на пробное занятие" handler={ShowFullRecord} />
                            </ButtonContainer>
                        </GeneralInformation>
                        <TextContainer>
                            <H3>Английский станет надежным и верным другом в любой ситуации</H3>
                        </TextContainer>
                    </GeneralInformationContainer>
                    <CourseProgramContainer>
                        <TextContainerCourseProgram>
                            <H3>Программа обучения основана на лучших учебных пособиях</H3>
                        </TextContainerCourseProgram>

                        <ContainerQuestionAnswer>
                            <QuestionAnswer />
                            <QuestionAnswer />
                            <QuestionAnswer />
                            <QuestionAnswer />
                        </ContainerQuestionAnswer>


                    </CourseProgramContainer>
                </Content>
            </Container>
        </>
    )
}
