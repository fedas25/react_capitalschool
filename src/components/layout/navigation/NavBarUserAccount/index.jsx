import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button';
import { Link, useMatch } from "react-router-dom"

const Container = styled.div`
display: flex;
align-items: center;
gap: 24px;
`;


function CustomLink({ children, to, type }) {
  const math = useMatch(to);
  return (
    <Link to={to}>
      {math == null ?
      <Button title={children} btnColor="gray" color="violet" /> :
      <Button title={children} btnColor="violet" />}
    </Link>
  )
}


export default function Index({ student }) {
  return (
    <Container>
      <CustomLink to="/record">
        Мои записи
      </CustomLink>
      <CustomLink to="/">
        {student ? "Мои курсы" : "Мои ученики"}
      </CustomLink>
      <CustomLink to="/passed">
        Пройденное
      </CustomLink>
    </Container>
  )
}
