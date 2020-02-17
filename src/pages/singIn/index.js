import React from 'react';
import Input from '../../components/Input/index';

import { Container, Content } from './styles';

function SingIn() {
  return (
    <Container>
      <Content>
        <form>
          <h1> Page signIn </h1>
          <Input placeholder="Seu email" />
          <Input placeholder="Sua senha" type="password" />
        </form>
      </Content>
    </Container>
  );
}

export default SingIn;
