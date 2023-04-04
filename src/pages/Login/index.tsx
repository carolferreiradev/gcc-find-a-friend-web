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
import axios from 'axios'
import { Loading } from '@/components/Loading'

export function Login() {
  const navigate = useNavigate()
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const [typeInputPassword, setTypeInputPassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    try {
      setIsLoading(true)
      if (!email.current?.value || !password.current?.value) {
        toast.warning('Email e senha são campos obrigatórios')
        return
      }

      const formData = {
        email: email.current.value,
        password: password.current.value,
      }

      const route = loginSession()
      const { data } = await axios.post(route, formData)

      const credential = {
        token: data?.token,
        name: data?.org?.nome,
      }

      localStorage.setItem(
        '@findAFriend:credential',
        JSON.stringify(credential),
      )
      navigate('/dashboard')
    } catch (error: any) {
      if (error.response.data.error) {
        toast.error(error.response.data.error)
        return
      }

      toast.error('Ocorreu um erro ao tentar efetuar login!')
    } finally {
      setIsLoading(false)
    }
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
      {isLoading && <Loading />}
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
