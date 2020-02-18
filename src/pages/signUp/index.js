import React from 'react';
import Input from '../../components/Input/index';
import Button from '../../components/Button/ButtonAuthentication/index';

import { Container, Content } from './styles';

function SignUp() {
  return (
    <Container>
      <Content>
        <form>
          <h1> Sign-up </h1>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Cpf" />
          <Input placeholder="Data de nascimento" />
          <Input placeholder="Senha" type="password" />
          <Button message="Cadastrar" />
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
