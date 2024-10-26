import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import twitterLogo from "../../assets/twitter.svg"
import { PrimaryButton, SecondaryButton, Title } from "../../components";

import {
  Container,
  ContainerLogo,
  ContainerLogin,
  Login,
  Input,
} from './styles'

interface LoginUser {
  login: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState<LoginUser>({ login: "", password: "" })

  const handleSubmit = () => {

    if (loginUser.login == 'ncsmatias' && loginUser.password == '123') {
      navigate("/")
    }
  }

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setLoginUser({ ...loginUser, 'login': value })
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setLoginUser({ ...loginUser, 'password': value })
  }

  return <Container>
    <ContainerLogo>
      <img src={twitterLogo}></img>
    </ContainerLogo>
    <ContainerLogin>
      <Login onSubmit={handleSubmit}>
        <Title style={{ fontSize: '24px' }}>O que está acontecendo?</Title>
        <form>
          <Input type="text" placeholder="Login" onChange={(event) => handleLogin(event)} />
          <Input type="password" placeholder="Senha" onChange={(event) => handlePassword(event)} />
          <PrimaryButton>Entrar</PrimaryButton>
        </form>
        <SecondaryButton>Esqueci minha senha</SecondaryButton>
      </Login>
    </ContainerLogin>
  </Container>
}

export default LoginPage;