import styled from 'styled-components';

const DetailsContainer = styled.main`
  background-color: #808080;
  position: absolute;
  height: 98%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AvatarContent = styled.img`
  border-radius: 50%;
  border: solid;
`

const AboutContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #FFC0CB;
  margin-top: 2%;
  width: 25%;
  text-align: center;
  border-radius: 10px;
  border: solid;
`

export {
  DetailsContainer,
  AvatarContent,
  AboutContainer,
}