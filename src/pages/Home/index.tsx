import bannerImg from '@/assets/icons/banner.svg'
import logoImg from '@/assets/icons/logo.svg'
import { Select } from '@/components/Select'
import { cityList, statesList } from '@/services'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Banner, Container, Content, Footer, Header, Logo } from './styles'
import { Loading } from '@/components/Loading'
import { publicRequest } from '@/auth/axios'

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
  const [isLoading, setIsLoading] = useState(false)
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
    try {
      setIsLoading(true)
      state.current = value

      const route = cityList(value)
      const { data } = await publicRequest.get(route)

      const citys = data?.citys?.map((city: CityProps) => {
        return {
          value: city.name,
          label: city.name,
        }
      })
      setListCity(citys)
    } catch (error: any) {
      if (error.response.data.error) {
        toast.error(error.response.data.error)
        return
      }

      toast.error('Ocorreu um erro ao tentar buscar cidades!')
    } finally {
      setIsLoading(false)
    }
  }

  function handleChangeCity(value: string) {
    city.current = value
  }

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const route = statesList()

        const { data } = await publicRequest(route)

        const states = data?.states?.map((state: StatesProps) => {
          return {
            value: state.sigla,
            label: state.sigla,
          }
        })
        setListStates(states)
      } catch (error: any) {
        if (error.response.data.error) {
          toast.error(error.response.data.error)
          return
        }
        console.log(error)
        toast.error('Ocorreu um erro ao tentar listar estados!')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <Container>
      {isLoading && <Loading />}
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
