import React, { useState } from 'react';
require('dotenv').config();

function LoginPage () {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <input type='text' onChange={ (e) => setUser(e.target.vaue) }/>
      <input type='password' onChage={ (e) => setPassword(e.target.value) }/>
      <button> Entrar </button>
    </main>
  );
};

export default LoginPage;