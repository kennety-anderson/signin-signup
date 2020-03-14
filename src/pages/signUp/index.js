import React, { useState, useEffect } from 'react';
import Input from '../../components/Input/index';
import Button from '../../components/Button/ButtonAuthentication/index';
import Modal from '../../components/Modal/ModalSignUp/index';

import { Container, Content } from './styles';

import apiCustomer from '../../services/crud-customers';

function SignUp({ history }) {
  const [dataForm, setDataForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [modal, setModal] = useState();

  const handlerDataForm = e =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  useEffect(() => {
    if (modal === false) history.push('/');
  }, [modal, history]);

  const handlerSubmit = async e => {
    e.preventDefault();
    try {
      await apiCustomer.post('customers', dataForm);
      setModal(true);
    } catch (err) {
      switch (err.response.status) {
        case 400:
          setErrorMessage('Verifique os campos enviados');
          break;
        case 422:
          setErrorMessage('Email já vinculado a uma conta existente!');
          break;
        default:
          setErrorMessage('Um erro aconteceu, por favor tente mais tarde!');
      }
    }
  };

  return (
    <Container>
      <Content>
        {modal && <Modal open={modal} onClose={setModal} />}
        <form onSubmit={handlerSubmit}>
          <h1> Sign-up </h1>
          {errorMessage && <p>{errorMessage}</p>}
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
