import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button';
import { Link } from "react-router-dom"

const Container = styled.div`
display: flex;
align-items: center;
gap: 24px;
`;

export default function Index({ teacher }) {
  return (
    <Container>
      <Link to="/record">
        <Button title="Мои записи" textColor="violet" color="gray" />
      </Link>
      <Link to="/">
        <Button title={teacher ? "Мои ученики" : "Мои курсы"} textColor="violet" color="gray" />
      </Link>
      <Link to="/passed">
        <Button title="Пройденное" textColor="violet" color="gray" />
      </Link>
    </Container>
  )
}
