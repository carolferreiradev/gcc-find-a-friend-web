import { Alert } from '@/components/Alert'
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
    queryFn: () => {
      const request = petAdoptionRequirements(petId || '')
      return fetch(request).then((res) => res.json())
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
