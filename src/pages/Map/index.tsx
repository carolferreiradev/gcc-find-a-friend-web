import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import { Loading } from '@/components/Loading'
import { petListByCity } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Container,
  Content,
  Display,
  Header,
  HeaderSelect,
  SelectWrapper,
} from './styles'

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
  const [params] = useSearchParams()

  const { data, isLoading } = useQuery({
    queryKey: ['petsMap'],
    queryFn: () => {
      const request = petListByCity(params.get('city') || '')
      return fetch(request).then((res) => res.json())
    },
  })

  // eslint-disable-next-line no-unused-vars
  function handleFilterByPetType() {
    // TO DO
  }
  if (isLoading) return <Loading />
  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre <span>{data?.pets.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
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
