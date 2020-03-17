import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/index';
import Button from '../../components/Button/ButtonAuthentication/index';

import { Container, Content } from './styles';

import apiAuthentication from '../../services/auth/api';
import { login } from '../../services/auth/authentication';

function SingIn({ history }) {
  const [userAuth, setUserAuth] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await apiAuthentication.post('auth', userAuth);
      login(data.accessToken);
      history.push('/home');
    } catch (err) {
      setErrorMessage('error');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1> Sign-in </h1>
          {errorMessage && <p>{errorMessage}</p>}
          <div>
            <Input
              name="email"
              onChange={e =>
                setUserAuth({ ...userAuth, email: e.target.value })
              }
              required="required"
            />
            <label>Email</label>
          </div>
          <div>
            <Input
              name="password"
              type="password"
              onChange={e =>
                setUserAuth({ ...userAuth, password: e.target.value })
              }
              required="reuired"
            />
            <label>Senha</label>
          </div>
          <Button message="Entrar" />
          <Link to="signup">Criar conta gratuita</Link>
        </form>
      </Content>
    </Container>
  );
}

export default SingIn;
