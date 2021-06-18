import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/globalContext';
import {
  CardContainer,
  LoginCard
} from '../style/listCard';

function ListCard() {
  const {
    users,
    page,
    setUser,
  } = useContext(GlobalContext);
  return (
    <CardContainer>
      <strong> Users </strong>
      {users.map((user, index) => {
        if (index <= page * 10 && index >= (page - 1) * 10) {
          return(
            <Link
              style={{textDecoration: 'none'}}
              to={`/user/${ user.login }`}
              key={user.login}
              onClick={() => setUser(user.login)}
            >
              <LoginCard>
                { user.login }
              </LoginCard>
            </Link>
          )
        } else { return null }
      })}
    </CardContainer>
  );
}

export default ListCard;
