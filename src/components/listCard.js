import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function ListCard() {
  const { users } = useContext(GlobalContext);

  return(
    <section>
    {users.map((user) => {
      console.log(user.login);
    })}
    </section>
  )
}

export default ListCard;