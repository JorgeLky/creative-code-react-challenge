import React, { useState } from 'react';
import GlobalContext from './globalContext';

function GlobalProvider({ children }) {
  const [users, setUsers] = useState([]);
  const context = {
    users,
    setUsers,
  }

  return(
    <GlobalContext.Provider value={ context } >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
