import bannerImg from '@/assets/icons/banner.svg'
import logoImg from '@/assets/icons/logo.svg'
import { Select } from '@/components/Select'
import { cityList, statesList } from '@/services'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Banner, Container, Content, Footer, Header, Logo } from './styles'

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
    navigate(`/map?city=${city.current}`)
  }

  async function handleChangeState(value: string) {
    state.current = value

    const route = cityList(value)
    const response = await fetch(route)
      .then((response) => response.json())
      .catch((err) => err.error)

    if (response.error) {
      toast.error(response.error)
      return
    }
    const citys = response.citys.map((city: CityProps) => {
      return {
        value: city.name,
        label: city.name,
      }
    })
    setListCity(citys)
  }

  function handleChangeCity(value: string) {
    city.current = value
  }

  useEffect(() => {
    ;(async () => {
      try {
        const route = statesList()

        const response = await fetch(route)
          .then((response) => response.json())
          .catch((err) => err.error)

        if (response.error) {
          toast.error(response.error)
          return
        }

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
            <img src={logoImg} alt="" />
          </Logo>
        </Header>

        <Banner>
          <h1>Leve a felicidade para o seu lar</h1>
          <img src={bannerImg} alt="Cães sorrindo" />
        </Banner>

        <Footer>
          <div className="description">
            <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>

            <Link to="/login">
              <span>Sou uma ORG</span>
            </Link>
          </div>

          <form onSubmit={handleSearchPets}>
            <span>Busque um amigo:</span>
            <Select
              id="state"
              name="states"
              className="selectState"
              label=""
              options={listStates}
              onChange={(value: ChangeEvent<HTMLInputElement>) =>
                handleChangeState(value.target.value)
              }
            />
            <Select
              id="city"
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
