import React, { useState } from 'react'
import styled from 'styled-components'
import Registration from './Registration'
import Authoris from './Authorization'
import GetCode from './GetCode'
import GetMail from './GetMail'
import ActivityBeenCompleted from './ActivityBeenCompleted'
import SetPassword from './SetPassword'

const Container = styled.div`
    z-index: 2;
    display: ${(props) => props.show == false ? "none" : "block"} ;
`;

export default function Entry({show, setShow}) {
  // stage:
  // 0 - set personal data name email password
  // 1 - set confirmation code
  // 2 - registration was successful
  // type:
  // 0 - registration
  // 1 - Authorization
  // stage:
  // 0 - set personal data name email password
  // 1 - set confirmation code
  // 2 - registration was successful

  const [type, setType] = useState(0);
  const [stage, setStage] = useState(0);
  // два stage под разные типы модалок stageRegistration stageAutorisition
  // при входе, сразу кинет в учётку

  function SetNextStage() {
    setStage(stage != 2 ? stage + 1 : 0)
  }

  function SetAutorisition() {
    setType(1);
    setStage(0);
  }

  function SetRegistrition() {
    setType(0);
    setStage(0);
  }

  const formRegistration = (stage) => {
    switch (stage) {
      case 0:
        return <Registration handlerNav={{ SetAutorisition: SetAutorisition, SetRegistrition: SetRegistrition }} handlerButton={SetNextStage} handlerExit={() => {setShow(false)}}/>;
      case 1:
        return <GetCode handlerButton={SetNextStage} />;
      case 2: // close handler
        return <ActivityBeenCompleted title="Регистрация прошла успешно" handlerButton={() => {SetNextStage(); setShow(false)}} />;
      default:
        return <Registration handlerButton={SetNextStage} />;
    }
  };

  const formAuthorization = (stage) => {
    switch (stage) {
      case 0:
        return <Authoris handlerNav={{ SetAutorisition: SetAutorisition, SetRegistrition: SetRegistrition }} handlerButton={SetNextStage} handlerExit={() => setShow(false)}/>;
      case 1:
        return <GetMail handlerButton={SetNextStage} />;
      case 2:
        return <SetPassword handlerButton={SetNextStage} />;
      default:
        return <Authoris handlerButton={SetNextStage} />; // close handler
    }
  };

  return (
    <>
      <Container show={+show}>
        {
          type === 0 ?
            formRegistration(stage) :
            formAuthorization(stage)
        }
      </Container>
    </>
  )
}
