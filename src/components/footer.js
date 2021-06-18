import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import {
  FooterListPage,
  PageControlButtons,
} from '../style/listCard';

function Footer() {
  const {
    page,
    nextPage,
    previousPage,
  } = useContext(GlobalContext);

  return(
    <FooterListPage>
      <PageControlButtons onClick={ () => previousPage() }> Página anterior </PageControlButtons>
      { page }
      <PageControlButtons onClick={ () => nextPage() }> Próxima página </PageControlButtons>
    </FooterListPage>
  )

}

export default Footer;
