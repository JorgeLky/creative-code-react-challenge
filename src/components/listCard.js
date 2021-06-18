import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/globalContext';
import {
  CardContainer
} from '../style/listCard';

function ListCard() {
  const {
    users,
    page,
    setUser,
  } = useContext(GlobalContext);
  return (
    <CardContainer>
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
    </CardContainer>
  );
}

export default ListCard;
