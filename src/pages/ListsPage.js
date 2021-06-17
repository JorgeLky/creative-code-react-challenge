import React, { useEffect, useState } from 'react';
import api from '../services/api';
import {
  SideMenu,
  Header,
  ListCard,
} from '../components/index';

function ListsPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => setUsers(response.data));
  }, []);

  return(
    <main>
      <Header />
      <SideMenu />
      <ListCard users={users} />
    </main>
  )
}

export default ListsPage;
