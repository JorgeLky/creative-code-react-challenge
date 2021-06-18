import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import gitHubIcon from '../icons/GitHubIcon.svg'
import {
  Container,
  TextBox,
  LoginButton,
  ErrorBox,
  GitHubIcon,
} from '../style/login';
require('dotenv').config();

function LoginPage () {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState();

  const validateLogin = (user, password) => {
    const userName = (user === process.env.REACT_APP_ADMIN);
    const key = (password === process.env.REACT_APP_PASSWORD);
    if (userName === true && key === true) {
      setLogin(true);
    } else {
      setLogin('informações incorretas');
    }
  }
  
  if(login !== true) {
    return (
    <Container>
      <GitHubIcon src={gitHubIcon} alt="Mascote github" />
      <TextBox
        type='text'
        onChange={ (e) => setUser(e.target.value) }
        placeholder="User Name"
      />
      <TextBox
        type='password'
        onChange={ (e) => setPassword(e.target.value) }
        placeholder="Password"
      />
      <LoginButton onClick={ () => validateLogin(user, password) }>
        <strong> Entrar </strong> 
      </LoginButton>
      <ErrorBox>
        <strong>{ login }</strong>
      </ErrorBox>
    </Container>
  );
  } else {
    return <Redirect to="/users" />
  }
}

export default LoginPage;