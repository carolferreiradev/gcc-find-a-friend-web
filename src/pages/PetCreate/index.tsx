import arrowIcon from '@/assets/icons/arrow.svg'
import logoIcon from '@/assets/icons/logo-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, Container, Content, Divider, Sidebar } from './styles'
import { Input } from '@/components/Input'
import { SelectForm } from '@/components/SelectForm'
import {
  ageOptions,
  energyOptions,
  environmentOptions,
  independencyOptions,
  sizeOptions,
  typeOptions,
} from '@/utils/values-aside'
import { TextArea } from '@/components/TextArea'
import { InputFile } from '@/components/InputFile'
import { InputMultiple } from '@/components/InputMultiple'
import { CreatePetProps } from '@/types/create-pet'
import { useState } from 'react'
import { createPet } from '@/services'
import { toast } from 'react-toastify'
import { Loading } from '@/components/Loading'
import { authRequest } from '@/auth/axios'

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
    .string({
      required_error: 'Campo obrigatório',
    })
    .array()
    .nonempty({
      message: 'Campo obrigatório',
    })
    .min(1, { message: 'Necessário ao menos um requisito' }),
  images: z
    .any({ required_error: 'Campo obrigatório' })
    .array()
    .nonempty({
      message: 'Campo obrigatório',
    })
    .min(1, { message: 'Necessário ao menos uma imagem' })
    .max(6, { message: 'Máximo de 5 imagens permitidas' }),
})

export function PetCreate() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<CreatePetProps>({
    resolver: zodResolver(schema),
    mode: 'all',
  })
  const handleCreatePet: SubmitHandler<CreatePetProps> = async (data) => {
    try {
      setIsLoading(true)
      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('age', data.age)
      formData.append('size', data.size)
      formData.append('description', data.description)
      formData.append('energy', data.energy)
      formData.append('independence', data.independence)
      formData.append('type', data.type)
      formData.append(
        'adoptionRequirements',
        JSON.stringify(JSON.stringify(data.adoptionRequirements)),
      )
      data.images.forEach((image) => {
        formData.append('images', image!)
      })

      const url = createPet()
      await authRequest.post(url, formData)

      toast.success('Pet cadastrado com sucesso')
      navigate('/')
    } catch (error: any) {
      if (error.response.data.error) {
        toast.error(error.response.data.error)
        return
      }

      toast.error('Ocorreu um erro ao tentar cadastrar o pet!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      {isLoading && <Loading />}
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
              name="type"
              errorMessage={errors.type?.message}
              label="Tipo"
              options={typeOptions}
            />

            <SelectForm
              register={register}
              name="environment"
              errorMessage={errors.environment?.message}
              label="Ambiente"
              options={environmentOptions}
            />

            <InputFile
              register={register}
              setValue={setValue}
              name="images"
              errorMessage={errors.images?.message}
              label="Fotos"
            />
          </div>
          <h2>Requisitos para adoção</h2>
          <Divider />

          <InputMultiple
            name="adoptionRequirements"
            errorMessage={errors.adoptionRequirements?.message}
            label="Requisitos"
            setValue={setValue}
            getValues={getValues}
          />

          <Button type="submit">Confirmar</Button>
        </form>
      </Content>
    </Container>
  )
}
