import React, { useState } from 'react';
import Input from '../../components/Input/index';
import Button from '../../components/Button/ButtonAuthentication/index';

import apiCustomer from '../../services/crud-customers';

import { Container, Content } from './styles';

function SignUp() {
  const [dataForm, setDataForm] = useState({});

  const handlerDataForm = (event, key) =>
    setDataForm({ ...dataForm, [key]: event.target.value });

  return (
    <Container>
      <Content>
        <form>
          <h1> Sign-up </h1>
          <Input
            placeholder="Nome"
            onChange={event => handlerDataForm(event, 'name')}
          />
          <Input
            placeholder="Email"
            onChange={event => handlerDataForm(event, 'email')}
          />
          <Input
            placeholder="Cpf"
            onChange={event => handlerDataForm(event, 'cpf')}
          />
          <Input
            placeholder="Data de nascimento"
            onChange={event => handlerDataForm(event, 'birthDate')}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={event => handlerDataForm(event, 'password')}
          />
          <Button message="Cadastrar" />
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
