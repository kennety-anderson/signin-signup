import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/index'
import Button from '../../components/Button/ButtonAuthentication/index'

import { Container, Content } from './styles'
console.log(process.env.REACT_APP_URL_CRUD_CUSTOMERS)

function SingIn () {
  return (
    <Container>
      <Content>
        <form>
          <h1> Sign-in </h1>
          <Input placeholder='Seu email' />
          <Input placeholder='Sua senha' type='password' />
          <Button message='Entrar' />
          <Link to='signup'>Criar conta gratuita</Link>
        </form>
      </Content>
    </Container>
  )
}

export default SingIn
