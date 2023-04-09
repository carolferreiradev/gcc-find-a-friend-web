import arrowIcon from '@/assets/icons/arrow.svg'
import logoIcon from '@/assets/icons/logo-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Button,
  ButtonPlus,
  Container,
  Content,
  Divider,
  Sidebar,
} from './styles'
import { Input } from '@/components/Input'
import { SelectForm } from '@/components/SelectForm'
import {
  ageOptions,
  energyOptions,
  environmentOptions,
  independencyOptions,
  sizeOptions,
} from '@/utils/values-aside'
import { TextArea } from '@/components/TextArea'

// eslint-disable-next-line no-unused-vars
interface CreatePetProps {
  name: string
  age: string
  description: string
  energy: string
  independence: string
  size: string
  type: string
  adoptionRequirements: string[]
  images: string
}

const schema = z.object({
  name: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(1, { message: 'Campo obrigatório' }),
  age: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  description: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' })
    .max(300, { message: 'O tamanho máximo de caracteres é de 300' }),
  energy: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  independence: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  size: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  type: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  environment: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  adoptionRequirements: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
  images: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, { message: 'Campo obrigatório' }),
})

export function PetCreate() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'all',
  })
  console.log(errors)
  async function handleCreatePet(values: any) {
    console.log(values)
  }

  return (
    <Container>
      <Sidebar>
        <img src={logoIcon} alt="" />
        <button onClick={() => navigate(-1)}>
          <img src={arrowIcon} alt="" />
        </button>
      </Sidebar>
      <Content>
        <form onSubmit={handleSubmit(handleCreatePet)}>
          <h2>Adicione um pet</h2>
          <Divider />
          <div className="group">
            <Input
              register={register}
              name="name"
              errorMessage={errors.name?.message}
              label="Nome"
            />
            <TextArea
              register={register}
              name="description"
              errorMessage={errors.description?.message}
              label={{
                main: 'Sobre',
                sub: 'Máximo de 300 caracteres',
              }}
            />

            <SelectForm
              register={register}
              name="age"
              errorMessage={errors.age?.message}
              label="Idade"
              options={ageOptions}
            />
            <SelectForm
              register={register}
              name="size"
              errorMessage={errors.size?.message}
              label="Porte"
              options={sizeOptions}
            />
            <SelectForm
              register={register}
              name="energy"
              errorMessage={errors.energy?.message}
              label="Nível de energia"
              options={energyOptions}
            />

            <SelectForm
              register={register}
              name="independence"
              errorMessage={errors.independence?.message}
              label="Nível de independência"
              options={independencyOptions}
            />

            <SelectForm
              register={register}
              name="environment"
              errorMessage={errors.environment?.message}
              label="Ambiente"
              options={environmentOptions}
            />
          </div>
          <h2>Requisitos para adoção</h2>
          <Divider />
          <Input
            register={register}
            name="adoptionRequirements"
            errorMessage={errors.adoptionRequirements?.message}
            label="Requisito"
            placeholder="Defina um requisito"
          />
          <ButtonPlus type="button"> + </ButtonPlus>
          <Button type="submit">Confirmar</Button>
        </form>
      </Content>
    </Container>
  )
}
