import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import {
  SideMenuContainer,
  TextBox,
  NavBarOptions,
} from '../style/sidemenu';

function SideMenu() {
  const {
    setSearch,
    setPage,
    menu,
  } = useContext(GlobalContext);

  return(
    <SideMenuContainer className={ menu !== true ? '' : 'open' }>
      <TextBox
        type="text"
        placeholder="Pesquise pelo login"
        onChange={ (e) =>
          setSearch(e.target.value)
        }
        onClick={ () => setPage(1) }
      />
      <NavBarOptions>
        Nav1
      </NavBarOptions>
      <NavBarOptions>
        Nav2
      </NavBarOptions>
      <NavBarOptions>
        Nav3
      </NavBarOptions>
    </SideMenuContainer>
  )
}

export default SideMenu;