import { HTMLAttributes, useState } from 'react'
import { ButtonPlus, Container } from './styles'

import { UseFormSetValue, UseFormGetValues } from 'react-hook-form'

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string
  setValue: UseFormSetValue<any>
  getValues: UseFormGetValues<any>
  name: string
  errorMessage: any
}

export function InputMultiple(props: Props) {
  const { errorMessage, name, setValue, getValues, label, ...rest } = props
  const [quantityList, setQuantityList] = useState(1)

  function handleAddNewInput() {
    setQuantityList((prevState) => prevState + 1)
  }

  function handleCaptureValueFromInput() {
    const allInputs: any = document.querySelectorAll(`#${name}-input-id`)
    const valuesMapped: string[] = []
    for (const item of allInputs.values()) {
      if (!item.value) return
      valuesMapped.push(item.value)
    }
    setValue(name, valuesMapped)
  }

  return (
    <Container>
      <label htmlFor={`${name}-input-id`}>{label}</label>
      {Array.from(Array(quantityList).keys()).map((_, key) => (
        <input
          key={`input-${key}-${name}`}
          id={`${name}-input-id`}
          type="text"
          {...rest}
          onBlur={() => handleCaptureValueFromInput()}
        />
      ))}

      {errorMessage && <span className="error-message">{errorMessage}</span>}

      <ButtonPlus type="button" onClick={handleAddNewInput}>
        {' '}
        +{' '}
      </ButtonPlus>
    </Container>
  )
}
