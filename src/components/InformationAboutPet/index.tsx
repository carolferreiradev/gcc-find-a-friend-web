/* eslint-disable jsx-a11y/alt-text */
import botLightning from '@/assets/icons/bolt-lightning.svg'
import bolt from '@/assets/icons/bolt.svg'
import dotFill from '@/assets/icons/dot-fill.svg'
import dotFull from '@/assets/icons/dot-full.svg'
import square from '@/assets/icons/square.svg'
import { useEffect, useState } from 'react'
import { Card, Container, Icons } from './styles'

interface Props {
  energy: number
  size: 'small' | 'medium' | 'big'
}

interface EnergyPetProps {
  full: number[]
  fill: number[]
}

export function InformationAboutPet(props: Props) {
  const { energy, size } = props
  const [energyPet, setEnergyPet] = useState({} as EnergyPetProps)

  useEffect(() => {
    setEnergyPet({
      full: Array.from({ length: energy }, (_, i) => i + 1),
      fill: Array.from({ length: 5 - energy }, (_, i) => i + 1),
    })
  }, [energy])

  return (
    <Container>
      <Card>
        <div>
          <Icons>
            {energyPet?.full?.map((_, key) => (
              <img src={botLightning} key={`bot-lightning-full-${key}`} />
            ))}
            {energyPet?.fill?.map((_, key) => (
              <img src={bolt} key={`bot-lightning-fill-${key}`} />
            ))}
          </Icons>
          {energyPet?.full?.length < 3 && <span>Pouca Energia</span>}
          {energyPet?.full?.length === 3 && <span>Energia Média</span>}
          {energyPet?.full?.length > 3 && <span>Muita Energia</span>}
        </div>
      </Card>
      <Card>
        <div>
          <Icons>
            <img src={square} />
          </Icons>
          <span>Ambiente amplo</span>
        </div>
      </Card>
      <Card>
        <div>
          {size === 'big' && (
            <>
              <Icons>
                <img src={dotFull} />
                <img src={dotFull} />
                <img src={dotFull} />
              </Icons>
              <span>Grandão</span>
            </>
          )}
          {size === 'medium' && (
            <>
              <Icons>
                <img src={dotFull} />
                <img src={dotFull} />
                <img src={dotFill} />
              </Icons>
              <span>Médio</span>
            </>
          )}
          {size === 'small' && (
            <>
              <Icons>
                <img src={dotFill} />
                <img src={dotFill} />
                <img src={dotFill} />
              </Icons>
              <span>Pequenino</span>
            </>
          )}
        </div>
      </Card>
    </Container>
  )
}
