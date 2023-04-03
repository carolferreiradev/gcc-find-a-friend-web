import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

import {
  AsideContent,
  AsideHeader,
  Container,
  ContentFilters,
  ContentHeader,
  HeaderInput,
} from './styles'
import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from '@/utils/values-aside'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

interface Props {
  defaultValueSearch: string
}

export function Aside(props: Props) {
  const { defaultValueSearch } = props
  const [params, setParams] = useSearchParams()

  function handleChangeValueOnSelect(value: string, name: string) {
    params.set(name, value)
    setParams(params)
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input
              type="text"
              placeholder="Insira uma cidade"
              defaultValue={defaultValueSearch}
            />
            <button>
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            defaultValue={params.get('age')}
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChangeValueOnSelect(value.target.value, 'age')
            }
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            defaultValue={params.get('energy')}
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChangeValueOnSelect(value.target.value, 'energy')
            }
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            defaultValue={params.get('size')}
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChangeValueOnSelect(value.target.value, 'size')
            }
          />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
            defaultValue={params.get('independency')}
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              handleChangeValueOnSelect(value.target.value, 'independency')
            }
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
