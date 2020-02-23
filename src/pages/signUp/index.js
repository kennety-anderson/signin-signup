import React, { useState } from "react";
import Input from "../../components/Input/index";
import Button from "../../components/Button/ButtonAuthentication/index";

import apiCustomer from "../../services/crud-customers";

import { Container, Content } from "./styles";

function SignUp() {
  const [dataForm, setDataForm] = useState({});
  const [message, setMessage] = useState("");

  const handlerDataForm = e => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    console.log(dataForm);
  };
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
          <div>
            <Input
              name="name"
              onChange={e => handlerDataForm(e)}
              required="required"
            />
            <label>Nome</label>
          </div>
          <div>
            <Input
              name="email"
              onChange={e => handlerDataForm(e)}
              required="required"
            />
            <label>Email</label>
          </div>
          <div>
            <Input
              name="cpf"
              onChange={e => handlerDataForm(e)}
              required="required"
            />
            <label>Cpf</label>
          </div>
          <div>
            <Input
              name="birthDate"
              onChange={e => handlerDataForm(e)}
              required="required"
            />
            <label>Data de nascimento</label>
          </div>
          <div>
            <Input
              name="password"
              type="password"
              onChange={e => handlerDataForm(e)}
              required="required"
            />
            <label>Senha</label>
          </div>
          <Button message="Cadastrar" />
        </form>
      </Content>
    </Container>
  );
}

export default SignUp;
