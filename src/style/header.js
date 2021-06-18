import styled from 'styled-components';

const HeaderBar = styled.section`
  background-color: #FFC0CB;
  border-radius: 2px;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
`
const MenuButton = styled.button`
  margin-left: 1%;
  background-color: #FFC0CB;
  border: none;
`

const NameField = styled.h2`
  margin-right: 1%;
`

const IconMenu = styled.img`
  margin-right: 3%;
`


export {
  HeaderBar,
  NameField,
  IconMenu,
  MenuButton,
}