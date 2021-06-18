import React, { useState } from 'react';
import GlobalContext from './globalContext';

function GlobalProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({})
  const [menu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);

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

  const handleOpen = () => {
    setOpenMenu(!menu)
  }

  const confirmLogin = () => {
    setLogin(!login);
  }

  const context = {
    login,
    menu,
    user,
    search,
    page,
    users,
    setUsers,
    nextPage,
    previousPage,
    setSearch,
    setPage,
    setUser,
    handleOpen,
    confirmLogin,
  }

  return(
    <GlobalContext.Provider value={ context } >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
