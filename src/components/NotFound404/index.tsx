import notFoundJson from '@/assets/json/404.json'
import Lottie from 'lottie-react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function NotFound404() {
  return (
    <Container>
      <Lottie animationData={notFoundJson} loop={true} />

      <span>
        Página não encontrada, retornar para a <Link to="/">listagem</Link>.
      </span>
    </Container>
  )
}
