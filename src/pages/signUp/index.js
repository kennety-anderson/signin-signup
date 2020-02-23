import React, { useState } from "react";
import Input from "../../components/Input/index";
import Button from "../../components/Button/ButtonAuthentication/index";

import apiCustomer from "../../services/crud-customers";

import { Container, Content } from "./styles";

function SignUp() {
  const [dataForm, setDataForm] = useState({});
  const [message, setMessage] = useState("");

  const handlerDataForm = (event, key) =>
    setDataForm({ ...dataForm, [key]: event.target.value });

  const handlerSubmit = async event => {
    event.preventDefault();
    await apiCustomer
      .post("customers", dataForm)
      .then(data => setMessage("Conta criada com sucesso!"))
      .catch(err => {
        switch (err.response.status) {
          case 400:
            setMessage("Verifique os campos enviados");
            break;
          case 422:
            setMessage("Email já vinculado a uma conta existente!");
            break;
          default:
            setMessage("Um erro aconteceu, por favor tente mais tarde!");
        }
      });
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handlerSubmit}>
          <h1> Sign-up </h1>
          {message && <p>{message}</p>}
          <Input
            placeholder="Nome"
            onChange={event => handlerDataForm(event, "name")}
          />
          <Input
            placeholder="Email"
            onChange={event => handlerDataForm(event, "email")}
          />
          <Input
            placeholder="Cpf"
            onChange={event => handlerDataForm(event, "cpf")}
          />
          <Input
            placeholder="Data de nascimento"
            onChange={event => handlerDataForm(event, "birthDate")}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={event => handlerDataForm(event, "password")}
          />
          <Button message="Cadastrar" />
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
