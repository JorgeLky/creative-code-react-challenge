import React from 'react';

function ListCard(props) {
  const users = props.users;



  return(
    <section>
    {users.map((user) => {
      console.log(user.login);
    })}
    </section>
  )
}

export default ListCard;