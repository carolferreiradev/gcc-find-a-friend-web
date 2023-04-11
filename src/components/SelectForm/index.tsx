import { HTMLAttributes } from 'react'
import { Container } from './styles'
import { UseFormRegister } from 'react-hook-form'

interface Props extends HTMLAttributes<HTMLSelectElement> {
  label: string
  register: UseFormRegister<any>
  name: string
  options: {
    label: string
    value: string | number
  }[]
  errorMessage: any
}

export function SelectForm(props: Props) {
  const { errorMessage, options, name, register, label, ...rest } = props
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select {...rest} id={label} {...register(name)}>
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      {errorMessage && <span>{errorMessage}</span>}
    </Container>
  )
}
