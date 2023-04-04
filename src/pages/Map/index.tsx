import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import { Loading } from '@/components/Loading'
import { petListByCity } from '@/services'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Container,
  Content,
  Display,
  Header,
  HeaderSelect,
  SelectWrapper,
} from './styles'
import { useCallback } from 'react'

const listParams = ['age', 'energy', 'independence', 'size']
interface Pet {
  age: string
  city: string
  description: string
  energy: string
  id: string
  independence: string
  name: string
  orgId: string
  photo: string
  photo_url: string
  size: string
  type: 'dog' | 'cat'
}

export function Map() {
  const [params, setParams] = useSearchParams()

  function getParamsInRoute() {
    // eslint-disable-next-line array-callback-return
    const paramsFilter = listParams
      .map((param) => {
        if (params.get(param)) {
          return `${param}=${params.get(param)}`
        }
      })
      .filter(Boolean)
      .join('&')
    return paramsFilter
  }

  const getListPets = useCallback(async () => {
    const paramsList = getParamsInRoute()
    const city = params.get('city')
    if (!city) return

    const request = petListByCity(city)
    const response = await axios.get(
      `${request}${paramsList ? `?${paramsList}` : ''}`,
    )
    return response.data
  }, [params])

  const { data, isLoading } = useQuery({
    queryKey: ['petsMap'],
    cacheTime: 0,
    queryFn: getListPets,
  })

  function handleChangeValueOnSelect(value: string, name: string) {
    params.set(name, value)
    setParams(params)
  }

  if (isLoading) return <Loading />

  return (
    <Container>
      <Aside defaultValueSearch={params.get('city') || ''} />

      <Content>
        <Header>
          <p>
            Encontre <span>{data?.pets.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              defaultValue={params.get('size') || ''}
              onChange={(value) =>
                handleChangeValueOnSelect(value.target.value, 'size')
              }
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {data?.pets.map((pet: Pet) => (
            <Link to={`/pet-details/${pet.id}`} key={pet.id}>
              <Card
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
                key={pet.id}
              />
            </Link>
          ))}
        </Display>
      </Content>
    </Container>
  )
}
