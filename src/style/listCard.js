import styled from 'styled-components';

const CardContainer = styled.section`
  border-radius: 5px;
  background-color: #DCDCDC;
  position: relative;
  height: 80%;
  margin-left: 30%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1em;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`

const LoginCard = styled.div`
  margin-top: -3%;
  border-radius: 5px;
  background-color: #FFF5EE;
  text-align: center;
  color: 	#000000;
  border: solid;
  border-width: 1px;
  padding: 0.5%;
  position: absolute;
  margin-left: -48%;
  width: 95%;
`

const FooterListPage = styled.footer`
  color: white;
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
`
const PageControlButtons = styled.button`
  background-color: #FFC0CB;
  border: none;
  margin: 1%;
`

export {
  PageControlButtons,
  CardContainer,
  LoginCard,
  FooterListPage,
}