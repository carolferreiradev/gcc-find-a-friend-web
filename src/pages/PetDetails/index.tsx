/* eslint-disable no-unused-vars */
import arrowIcon from '@/assets/icons/arrow.svg'
import logoIcon from '@/assets/icons/logo-icon.svg'
import whatsAppDarkIcon from '@/assets/icons/whatsapp-dark.svg'
import whatsAppIcon from '@/assets/icons/whatsapp.svg'
import { Gallery } from '@/components/Gallery'
import { InformationAboutPet } from '@/components/InformationAboutPet'
import { coordinatesByZipCode, petDetail } from '@/services'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  AdoptionRequests,
  Contact,
  Container,
  Content,
  Description,
  Divider,
  Sidebar,
  Title,
  WhatsAppButton,
} from './styles'

import { Loading } from '@/components/Loading'
import { LocationMap } from '@/components/LocationMap'
import { Request } from '@/components/Request'
import { messageWhatsApp } from '@/utils/message-whatsapp'

export function PetDetails() {
  const { petId } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['petsDetails'],
    cacheTime: 0,
    queryFn: async () => {
      const request = petDetail(petId || '')
      const { data } = await axios.get(request)
      const route = coordinatesByZipCode(data?.pet?.org?.cep)
      const responseCoord = await axios.get(route)
      return { ...data, coordZip: responseCoord.data }
    },
  })

  if (isLoading) return <Loading />

  return (
    <Container>
      <Sidebar>
        <img src={logoIcon} alt="" />
        <button onClick={() => navigate(-1)}>
          <img src={arrowIcon} alt="" />
        </button>
      </Sidebar>
      <Content>
        <Gallery petId={data?.pet?.id || ''} />
        <div className="content">
          <Title>{data?.pet?.name}</Title>

          <Description>{data?.pet?.description}</Description>

          <InformationAboutPet
            energy={data?.pet?.energy}
            size={data?.pet?.size}
          />

          {data?.coordZip?.coordinates?.latitude && (
            <LocationMap
              latitude={data?.coordZip?.coordinates?.latitude}
              longitude={data?.coordZip?.coordinates?.longitude}
              hiddenDescriptions
            />
          )}

          <Divider />

          <Contact>
            <div className="logo">
              <img src={logoIcon} alt="" />
            </div>
            <div className="address-contact">
              <h3>{data?.pet?.org.nome}</h3>
              <span>
                {data?.pet?.org.address}, {data?.pet?.city}
              </span>
              <Link
                to={`https://api.whatsapp.com/send?phone=${
                  data?.pet?.org.whatsappNumber
                }&text=${messageWhatsApp(
                  data?.pet?.name,
                  data?.pet?.org.nome,
                )}`}
                target="_blank"
              >
                <span className="phone">
                  <img src={whatsAppDarkIcon} alt="" />
                  {data?.pet?.org.whatsappNumber}
                </span>
              </Link>
            </div>
          </Contact>

          <Divider />

          <AdoptionRequests>
            <h3>Requisitos para adoção</h3>
            <Request petId={petId || ''} />
          </AdoptionRequests>

          <Divider />
          <Link
            to={`https://api.whatsapp.com/send?phone=${
              data?.pet?.org.whatsappNumber
            }&text=${messageWhatsApp(data?.pet?.name, data?.pet?.org.nome)}`}
            target="_blank"
          >
            <WhatsAppButton>
              <img src={whatsAppIcon} alt="" />
              Entrar em contato
            </WhatsAppButton>
          </Link>
        </div>
      </Content>
    </Container>
  )
}
