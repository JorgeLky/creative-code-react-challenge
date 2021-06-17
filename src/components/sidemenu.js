import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function SideMenu() {
  const { setSearch } = useContext(GlobalContext);

  return(
    <section>
      <input
        type="text"
        placeholder="Pesquise pelo login"
        onChange={ (e) => setSearch(e.target.value) }
      />
      <nav>
        Nav1
      </nav>
      <nav>
        Nav2
      </nav>
      <nav>
        Nav3
      </nav>
    </section>
  )
}

export default SideMenu;