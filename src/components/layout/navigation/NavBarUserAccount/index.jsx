import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button';

const Container = styled.div`
display: flex;
align-items: center;
gap: 24px;
`;

export default function Index({teacher}) {
  return (
    <Container>
        <Button title="Мои записи" textColor="violet" color="gray"/>
        <Button title={teacher ? "Мои ученики" : "Мои курсы"} textColor="violet" color="gray"/>
        <Button title="Пройденное" textColor="violet" color="gray"/>
    </Container>
  )
}
