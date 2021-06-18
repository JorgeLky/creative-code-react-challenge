import React, { useEffect, useContext } from 'react';
import { api } from '../services/api';
import GlobalContext from '../context/globalContext';
import { ListsContainer } from '../style/sidemenu';
import {
  SideMenu,
  Header,
  ListCard,
  Footer,
} from '../components/index';

function ListsPage() {
  const {
    setUsers,
    search,
  } = useContext(GlobalContext);

  useEffect(() => {
    api.get("/users")
      .then((response) =>
        setUsers(response.data.filter((users) =>
          users.login.includes(search))));
  }, [search]);

  return(
    <ListsContainer>
      <Header />
      <SideMenu />
      <ListCard users />
      <Footer />
    </ListsContainer>
  )
}

export default ListsPage;
