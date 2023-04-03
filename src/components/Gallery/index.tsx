import { petGallery } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Container, CurrentImage, GalleryContainer, Miniature } from './styles'

interface Props {
  petId: string
}

interface RequestGallery {
  id: string
  image: string
  photo_url: string
}

export function Gallery(props: Props) {
  const { petId } = props

  const { data } = useQuery({
    queryKey: ['petsGallery'],
    queryFn: () => {
      const request = petGallery(petId || '')
      return fetch(request).then((res) => res.json())
    },
  })
  const [isImageCurrent, setIsImageCurrent] = useState('')

  useEffect(() => {
    if (data?.pet_gallery) {
      setIsImageCurrent(data?.pet_gallery[0]?.photo_url)
    }
  }, [data?.pet_gallery])

  function handleChangeCurrentImage(imageId: string) {
    setIsImageCurrent(imageId)
  }

  return (
    <Container>
      <CurrentImage src={isImageCurrent} alt="" />
      <GalleryContainer>
        {data?.pet_gallery?.map((petImage: RequestGallery) => (
          <Miniature
            onClick={() => handleChangeCurrentImage(petImage.photo_url)}
            src={petImage.photo_url}
            alt={petImage.image}
            key={petImage.id}
            isCurrent={isImageCurrent === petImage.photo_url}
          />
        ))}
      </GalleryContainer>
    </Container>
  )
}
