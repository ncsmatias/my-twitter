import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ContainerLogo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1DA1F2;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background-color: #FFFFFF;
    border-radius: 50%;
  }
`

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Login = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #89A2B8;
  width: 100%;

  &:focus {
    border: 2px solid #1DA1F2;
    outline: none;
  }
`

export {
  Container,
  ContainerLogo,
  ContainerLogin,
  Login,
  Input,
}
