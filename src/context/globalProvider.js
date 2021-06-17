import React, { useState } from 'react';
import GlobalContext from './globalContext';

function GlobalProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const nextPage = () => {
    if ((users.length / page) === 10) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  }

  const previousPage = () => {
    if(page === 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  }



  const context = {
    search,
    page,
    users,
    setUsers,
    nextPage,
    previousPage,
    setSearch,
  }

  return(
    <GlobalContext.Provider value={ context } >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
