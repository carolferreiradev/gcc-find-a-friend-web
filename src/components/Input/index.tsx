import { HTMLAttributes } from 'react'
import { Container } from './styles'
import { UseFormRegister } from 'react-hook-form'

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string
  register: UseFormRegister<any>
  name: string
  errorMessage: any
}

export function Input(props: Props) {
  const { errorMessage, name, register, label, ...rest } = props
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input {...rest} id={label} {...register(name)} />
      {errorMessage && <span>{errorMessage}</span>}
    </Container>
  )
}
