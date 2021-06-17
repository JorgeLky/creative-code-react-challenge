import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/globalContext';

function ListCard() {
  const { users } = useContext(GlobalContext);
  console.log(users[0]);
  return(
    <section>
    {users.map((user) =>
      <p> { user.login } </p>
    )}
    </section>
  )
}

export default ListCard;