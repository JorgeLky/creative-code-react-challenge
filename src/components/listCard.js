import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/globalContext';

function ListCard() {
  const { users, page } = useContext(GlobalContext);
  return (
    <section>
      {users.map((user, index) => {
        if (index <= page * 10 && index >= (page - 1) * 10) {
          return(
            <p> { user.login } </p>
          )
        }
      })}
    </section>
  );
}

export default ListCard;
