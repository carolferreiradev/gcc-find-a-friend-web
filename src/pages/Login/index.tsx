import {
  Button,
  Buttons,
  Card,
  Container,
  Form,
  FormWrapper,
  InputWrapper,
  Wrapper,
} from './styles'

import LogoHorizontal from '@/assets/icons/logo-horizontal.svg'
import Eye from '@/assets/icons/password-eye.svg'
import Pets from '@/assets/icons/pets.svg'
import { loginSession } from '@/services'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function Login() {
  const navigate = useNavigate()
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const [typeInputPassword, setTypeInputPassword] = useState('password')

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!email.current?.value || !password.current?.value) {
      toast.warning('Email e senha são campos obrigatórios')
      return
    }

    const formData = {
      email: email.current.value,
      password: password.current.value,
    }

    const route = loginSession()
    const response = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((err) => err.error)

    if (response.error) {
      toast.error(response.error)
      return
    }
    const credential = {
      token: response?.token,
      name: response?.org?.nome,
    }

    localStorage.setItem('@findAFriend:credential', JSON.stringify(credential))
    navigate('/dashboard')
  }

  function handleRegisterOrganization() {
    navigate('/Register')
  }

  function changeTypeInputPassword() {
    setTypeInputPassword((prevState) =>
      prevState === 'password' ? 'text' : 'password',
    )
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={Pets} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                ref={email}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                ref={password}
                type={typeInputPassword}
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img onClick={changeTypeInputPassword} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Login
              </Button>
              <Button
                type="button"
                onClick={handleRegisterOrganization}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
