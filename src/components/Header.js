import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import menuIcon from  '../icons/hamburguer menu.svg';
import {
  HeaderBar,
  NameField,
  IconMenu,
  MenuButton,
} from '../style/header';

function Header() {
  const { handleOpen } = useContext(GlobalContext);
  return(
    <HeaderBar>
      <MenuButton onClick={ () => handleOpen() } id="check" >
        <IconMenu src={menuIcon} width="25px" alt="Hamburguer Menu"/>
      </MenuButton>
      <NameField> { process.env.REACT_APP_ADMIN } </NameField>
    </HeaderBar>
  )
}

export default Header;