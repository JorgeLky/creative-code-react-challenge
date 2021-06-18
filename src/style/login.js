import styled from 'styled-components';

const Container = styled.main`
  align-items: center;
  background-color: #808080;
  border: solid;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  height: 98%;
  justify-content: center;
  position: absolute;
  width: 98%;
`

const TextBox = styled.input`
  border-radius: 5px;
  height: 3%;
  margin-bottom: 2px;
  width: 20%;
`

const LoginButton = styled.button`
  background-color: #FF69B4;
  border-radius: 5px;
  text-decoration: none;
  width: 20%;
  height: 4%;
`
const ErrorBox = styled.div`
  color: #DC143C;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7%;
  margin-top: 5px;
  border-radius: 5px;
  width: 25%;
`

const GitHubIcon = styled.img`
  height: 40%;
  margin-bottom: 3%;
`

export {
  Container,
  TextBox,
  LoginButton,
  ErrorBox,
  GitHubIcon,
};

