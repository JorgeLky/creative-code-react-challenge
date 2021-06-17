import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function Footer() {
  const {
    page,
    nextPage,
    previousPage,
  } = useContext(GlobalContext);

  return(
    <footer>
      <button onClick={ () => previousPage() }> Página anterior </button>
      { page }
      <button onClick={ () => nextPage() }> Próxima página </button>
    </footer>
  )

}

export default Footer;
