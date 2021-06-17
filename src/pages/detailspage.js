import React, { useContext, useEffect, useState } from 'react';
import { userDetails } from '../services/api';
import GlobalContext from '../context/globalContext';

function DetailsPage() {
  const { user } = useContext(GlobalContext);
  const [inf, setInformation] = useState({})
  
  useEffect(() => {
    userDetails.get(`/${user}`)
      .then((response) =>
        setInformation(response.data))
  }, []);

  console.log(inf);

  return(
    <main>
      <img src={ inf.avatar_url } />
      <h3> { inf.name } </h3>
      <p> Followers: { inf.followers } </p>
      <h4> Bio: </h4>
      <p> { inf.bio } </p>
      <p> Company: { inf.company } </p>
      <p> Public gists: { inf.public_gists } </p>
      <p> Public Repos: { inf.public_repos } </p>
      <p> Blog: { inf.blog } </p>
      <p> { inf.html_url } </p>
    </main>
  )
}

export default DetailsPage;