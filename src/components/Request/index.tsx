import { Alert } from '@/components/Alert'
import axios from 'axios'
import { petAdoptionRequirements } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { Container } from './styles'

interface Props {
  petId: string
}

interface RequirementsProps {
  id: string
  title: string
}

export function Request(props: Props) {
  const { petId } = props

  const { data, isLoading } = useQuery({
    queryKey: ['adoptionRequirementsComp'],
    queryFn: async () => {
      const request = petAdoptionRequirements(petId || '')
      const response = await axios.get(request)
      return response.data
    },
  })

  if (isLoading) return <></>

  return (
    <Container>
      {data?.adoption_requirements.map((requirement: RequirementsProps) => (
        <Alert key={requirement.id} description={requirement.title} />
      ))}
    </Container>
  )
}
