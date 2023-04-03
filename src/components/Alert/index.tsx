/* eslint-disable jsx-a11y/alt-text */
import warningIcon from '@/assets/icons/warning.svg'
import { Container } from './styles'

interface Props {
  description: string
}
export function Alert(props: Props) {
  const { description } = props

  return (
    <Container>
      <img src={warningIcon} />
      <p>{description}</p>
    </Container>
  )
}
