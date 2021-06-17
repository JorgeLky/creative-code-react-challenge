import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
    <main>
      <input type='text' onChange={ (e) => setUser(e.target.value) }/>
      <input type='password' onChange={ (e) => setPassword(e.target.value) }/>
      <button onClick={ () => validateLogin(user, password) }> Entrar </button>
      <div className='error'>
        { login }
      </div>
    </main>
  );
  } else {
    return <Redirect to="/users" />
  }
}

export default LoginPage;