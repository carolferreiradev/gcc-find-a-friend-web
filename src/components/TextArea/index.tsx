import { HTMLAttributes } from 'react'
import { Container } from './styles'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label: {
    main: string
    sub?: string
  }
  register: UseFormRegister<CreatePetProps>
  name: string
  errorMessage: any
}

export function TextArea(props: Props) {
  const { errorMessage, name, register, label, ...rest } = props
  return (
    <Container>
      <label htmlFor={label.main}>
        {label.main} <sub>{label?.sub}</sub>
      </label>
      <textarea id={label.main} {...register(name)} {...rest} />
      {errorMessage && <span>{errorMessage}</span>}
    </Container>
  )
}
