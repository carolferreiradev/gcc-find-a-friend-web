import loadingJson from '@/assets/json/loading.json'
import Lottie from 'lottie-react'
import { Container } from './styles'

export function Loading() {
  return (
    <Container>
      <Lottie animationData={loadingJson} loop={true} />
      <span>Carregando...</span>
    </Container>
  )
}
