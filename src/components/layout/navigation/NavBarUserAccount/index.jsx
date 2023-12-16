import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button';
import { Link, useMatch } from "react-router-dom"

const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
column-gap: 24px;
@media (max-width: 768px) {
  column-gap: 12px;
}
row-gap: 12px;
`;


function CustomLink({ children, to, type }) {
  const math = useMatch(to);
  return (
    <Link to={to}>
      {math == null ?
      <Button authoriz title={children} btnColor="gray" color="violet" /> :
      <Button authoriz title={children} btnColor="violet" />}
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
