import styled from 'styled-components';

const SideMenuContainer = styled.section`
  background-color: #1C1C1C;
  color: #DCDCDC;
  font-family: Arial, Helvetica, sans-serif;
  width: 15%;
  display: flex;
  position: absolute;
  transform: translate(-150%);
  height: 90%;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  &.open {
    transform: translate(0)
  }
`

const ListsContainer = styled.main`
  background-color: #808080;
  position: absolute;
  width: 98%;
  height: 98%;
`

const TextBox = styled.input`
  margin-top: 3%;
  margin-bottom: 3%;
  width: 80%;
`

const NavBarOptions = styled.nav`
  margin-top: 3%;
  margin-bottom: 3%;
  width: 80%;
  text-align: center;
  border-bottom: solid;
  border-color: #C0C0C0;
`

export {
  SideMenuContainer,
  TextBox,
  NavBarOptions,
  ListsContainer,
}