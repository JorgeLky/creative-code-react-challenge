import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/globalContext';

function ListCard() {
  const {
    users,
    page,
    setUser,
  } = useContext(GlobalContext);
  return (
    <section>
      {users.map((user, index) => {
        if (index <= page * 10 && index >= (page - 1) * 10) {
          return(
            <Link
              to={`/user/${ user.login }`}
              key={user.login}
              onClick={() => setUser(user.login)}
            >
              <div>
                { user.login }
              </div>
            </Link>
          )
        }
      })}
    </section>
  );
}

export default ListCard;
