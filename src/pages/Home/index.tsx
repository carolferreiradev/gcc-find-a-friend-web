import { useNavigate } from 'react-router-dom'
import { Select } from '@/components/Select'
import { cityList, statesList } from '@/services'
import { toast } from 'react-toastify'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Container, Content, Banner, Footer, Header, Logo } from './styles'

interface StatesProps {
  id: number
  nome: string
  sigla: string
}
interface CityProps {
  code: string
  name: string
}

interface SelectOptionsProps {
  value: number | string
  label: string
}

export function Home() {
  const navigate = useNavigate()
  const [listStates, setListStates] = useState<SelectOptionsProps[]>([])
  const [listCity, setListCity] = useState<SelectOptionsProps[]>([])

  const state = useRef<string | null>(null)
  const city = useRef<string | null>(null)

  function handleSearchPets(event: FormEvent) {
    event.preventDefault()
    if (!state.current || !city.current) {
      toast.warning('Estado e cidade são obrigatórios')
      return
    }
    navigate('/map')
  }

  async function handleChangeState(value: string) {
    try {
      state.current = value
      const response = await cityList(value)
      const citys = response.citys.map((city: CityProps) => {
        return {
          value: city.code,
          label: city.name,
        }
      })
      setListCity(citys)
    } catch {
      setListCity([])
      toast.error('Ocorreu um erro ao listar as cidades!')
    }
  }

  function handleChangeCity(value: string) {
    city.current = value
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await statesList()
        const states = response.states.map((state: StatesProps) => {
          return {
            value: state.sigla,
            label: state.sigla,
          }
        })
        setListStates(states)
      } catch {
        toast.error('Ocorreu um erro ao listar os estados!')
      }
    })()
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <Logo>
            <img src="src/assets/icons/logo.svg" alt="" />
          </Logo>
        </Header>

        <Banner>
          <h1>Leve a felicidade para o seu lar</h1>
          <img src="src/assets/icons/banner.svg" alt="" />
        </Banner>

        <Footer>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>

          <form onSubmit={handleSearchPets}>
            <span>Busque um amigo:</span>
            <Select
              name="states"
              className="selectState"
              label=""
              options={listStates}
              onChange={(value: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(value.target.value)
              }
            />
            <Select
              disabled={!state.current}
              name="city"
              className="selectCity"
              label=""
              options={listCity}
              onChange={(value: ChangeEvent<HTMLInputElement>) =>
                handleChangeCity(value.target.value)
              }
            />

            <button type="submit" aria-label="Pesquisar">
              <img src="src/assets/icons/search.svg" alt="" />
            </button>
          </form>
        </Footer>
      </Content>
    </Container>
  )
}
