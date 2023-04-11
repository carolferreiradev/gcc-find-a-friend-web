import { ChangeEvent, HTMLAttributes, useRef, useState } from 'react'
import { ButtonPlus, Container, FileContainer } from './styles'
import uploadCloudImg from '@/assets/icons/upload-cloud.svg'
import fileImg from '@/assets/icons/file.svg'
import xSquareImg from '@/assets/icons/x-square.svg'

import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
  name: string
  errorMessage: any
}

export function InputFile(props: Props) {
  const { errorMessage, name, register, setValue, label, ...rest } = props
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [listFiles, setListFiles] = useState<any>([])

  function handleChangeInputFile(event: ChangeEvent<HTMLInputElement>) {
    const files: any = Array.prototype.slice.call(event.target.files)

    files &&
      setListFiles((prevState: any) => {
        setValue(name, [...prevState, ...files])
        return [...prevState, ...files]
      })
  }

  function handleDeleteFileFromState(fileDeleteName: string) {
    const files = listFiles.filter((file: any) => file.name !== fileDeleteName)
    setListFiles(files)
    setValue(name, files)
  }

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div className="upload-box" onClick={() => inputRef?.current?.click()}>
        <img src={uploadCloudImg} alt="" />
        <span>Arraste e solte o arquivo</span>
      </div>
      <input
        id={label}
        type="file"
        {...register(name)}
        multiple
        ref={inputRef}
        onChange={(event) => handleChangeInputFile(event)}
        hidden
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      {listFiles.map((file: any, index: number) => (
        <FileContainer key={`file-selected-input-${index}`}>
          <span>
            <img src={fileImg} alt="" />
            {file.name}
          </span>
          <button onClick={() => handleDeleteFileFromState(file.name)}>
            <img src={xSquareImg} alt="" />
          </button>
        </FileContainer>
      ))}
      <ButtonPlus type="button" onClick={() => inputRef?.current?.click()}>
        {' '}
        +{' '}
      </ButtonPlus>
    </Container>
  )
}
