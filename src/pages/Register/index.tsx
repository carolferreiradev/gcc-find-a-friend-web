import LogoHorizontal from '@/assets/icons/logo-horizontal.svg'
import Eye from '@/assets/icons/password-eye.svg'
import Pets from '@/assets/icons/pets.svg'
import { LocationMap } from '@/components/LocationMap'
import { coordinatesByZipCode } from '@/services'
import { createORG } from '@/services/ORG'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
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
import axios from 'axios'
import { Loading } from '@/components/Loading'

interface CoordinatesProps {
  latitude: number
  longitude: number
}

function getAllEmptyFields(value: {}) {
  const emptyFields: string[] = []
  Object.entries(value).forEach((obj) => {
    if (!obj[1]) {
      emptyFields.push(obj[0])
    }
  })
  return emptyFields
}

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const whatsappNumber = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const passwordConfirm = useRef<HTMLInputElement>(null)
  const address = useRef<HTMLInputElement>(null)
  const [cep, setCep] = useState<string>('')
  const [coordinates, setCoordinates] = useState<CoordinatesProps>(
    {} as CoordinatesProps,
  )

  const navigate = useNavigate()

  async function handleRegisterOrganization(event: FormEvent) {
    event.preventDefault()
    try {
      setIsLoading(true)
      if (password.current?.value !== passwordConfirm.current?.value) {
        toast.warning(`A senha e a confirmação devem ser iguais!`)
      }

      const formValues = {
        'Nome do responsável': name.current?.value,
        Email: email.current?.value,
        WhatsApp: whatsappNumber.current?.value,
        Senha: password.current?.value,
        'Confirmar senha': passwordConfirm.current?.value,
        Endereço: address.current?.value,
        CEP: cep,
      }

      const valuesEmpty = getAllEmptyFields(formValues)

      if (valuesEmpty.length > 0) {
        toast.warning(`${valuesEmpty} são campos obrigatórios`)

        return
      }

      const formData = {
        name: name.current?.value,
        email: email.current?.value,
        whatsappNumber: whatsappNumber.current?.value,
        password: password.current?.value,
        passwordConfirm: passwordConfirm.current?.value,
        address: address.current?.value,
        cep,
      }

      const route = createORG()
      await axios.post(route, formData)

      toast.success(`ORG Criado com sucesso!`)
      navigate('/login')
    } catch (error: any) {
      if (error.response.data.error) {
        toast.error(error.response.data.error)
        return
      }

      toast.error('Ocorreu um erro ao tentar cadastrar a ORG!')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRenderMapLocation() {
    try {
      setIsLoading(true)
      if (cep.length === 9) {
        setCoordinates({} as CoordinatesProps)
        const route = coordinatesByZipCode(cep)

        const { data } = await axios.get(route)

        if (address.current) {
          address.current.value = data.address || ''
        }
        setCoordinates(data.coordinates)
      }
    } catch (error: any) {
      if (error.response.data.error) {
        toast.error(error.response.data.error)
        return
      }

      toast.error('Ocorreu um erro ao tentar buscar coordenadas!')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleChangeValueCep(cep: string) {
    const cepMask = zipCodeMask(cep)
    setCep(cepMask)
  }

  const zipCodeMask = (value: string) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
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
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={handleRegisterOrganization}>
            <label htmlFor="name">Nome do responsável</label>
            <InputWrapper>
              <input
                ref={name}
                type="text"
                name="name"
                id="name"
                placeholder="Antônio Bandeira"
              />
            </InputWrapper>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                ref={email}
                type="text"
                name="email"
                id="email"
                placeholder="mayk@email.com"
              />
            </InputWrapper>

            <label htmlFor="address">CEP</label>
            <InputWrapper>
              <input
                value={cep}
                type="text"
                name="cep"
                onBlur={handleRenderMapLocation}
                maxLength={9}
                id="cep"
                onChange={(event) => handleChangeValueCep(event.target.value)}
                placeholder="00000-000"
              />
            </InputWrapper>
            {coordinates?.latitude && (
              <LocationMap
                latitude={coordinates.latitude}
                longitude={coordinates.longitude}
                hiddenDescriptions
              />
            )}

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                ref={address}
                type="text"
                name="address"
                id="address"
                disabled={cep.length !== 9}
                placeholder="Rua do Meio, 1825"
              />
            </InputWrapper>

            <label htmlFor="contact">WhatsApp</label>
            <InputWrapper>
              <input
                ref={whatsappNumber}
                type="text"
                name="contact"
                id="contact"
                placeholder="99 99999 9999"
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                ref={password}
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <InputWrapper>
              <input
                ref={passwordConfirm}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirme sua senha"
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
