import React from "react"
import styled from "styled-components"
import Font1920_h5 from "./../../fonts/desktop/1920_h5"
import Font1920_h6 from "./../../fonts/desktop/1920_h6"
import Font1920_p1 from "./../../fonts/desktop/1920_p1"
import jackdaw from "./../../../assets/jackdaw.png"
import teacher from "./../../../assets/teacher.jpg"
import Button from "./../../Button.jsx"
import CardNumber from "./CardNumber.jsx"

const Info = styled.div`
        display: flex;
        width: 820px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `;

const AudioPleer = styled.div`
        height: 56px;
        width: 337px;
        border-radius: 282.5px;
        border: 3px solid var(--srt, #E4E4E7);
        margin-bottom: 18px;
    `;

const Name = styled.span`
        margin-bottom: 40px;
    `;

const Courses = styled.div`
        width: 100%;
        display: flex;
        gap: 8px;
        padding-bottom: 24px;
    `;

const Course = styled.div`
        display: flex;
        padding: 12px 18px 12px 18px;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: ${(props) => ((props.color) ? props.color : "#D793E3")};
    `;

const Greeting = styled.div`
    width: 100%;
    min-height: 40px;
    margin-bottom: ${(props) => (props.course == true) ? "48px" : "32px"} ;
    `;

const ListQualifications = styled.div`
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`;

const Jackdaw = styled.img`
    width: 48px;
    height: 48px;
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
            <Font1920_h5>Квалификации</Font1920_h5>
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
    margin-top: 32px;
`;

const Card = styled.div`
    min-height: 882px;
    width: 1664px;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 165px;
    position: relative;
    /* transform: translateX(900px); */
    `;

const Photo = styled.img`
        width: 398px;
        height: 600px;
        border-radius: 50px;
    `;

const MainPart = styled.div`
        width: 1102px;
        height: 882px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 64px;
    `;


export default function Cartochka({ course }) {
    return (
        <Card>
            <Photo src={teacher} />
            <MainPart>
                <CardNumber />
                <Info>
                    <Name>
                        <Font1920_h5>Куликова Анастасия Николаевна</Font1920_h5>
                    </Name>
                    <AudioPleer />
                    <Courses>
                        <Course>
                            <Font1920_h6 white>ОГЭ</Font1920_h6>
                        </Course>
                        <Course color="#59C4E5">
                            <Font1920_h6 white>ОГЭ</Font1920_h6>
                        </Course>
                        <Course color="#FF9090">
                            <Font1920_h6 white>ОГЭ</Font1920_h6>
                        </Course>
                    </Courses>
                    <Greeting course={+course}>
                        <Font1920_p1 gray>
                            Hello! Im Anastasia, nice to meet you!
                            Ещё в школе я влюбилась в английский язык, и с тех пор он стал неотъемлемой частью моей жизни.
                            Теперь я не только наслаждаюсь играми, видео и музыкой в оригинале, завожу знакомства с людьми из разных стран,
                            но и обучаю этому интернациональному языку и других.
                        </Font1920_p1>
                        <StyledQualifications />
                    </Greeting>
                    {course && <Button title="Записаться на пробное занятие" />}
                </Info>
            </MainPart>
        </Card>
    )
}