import Leaflet from 'leaflet'
import { ReactNode } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import mapIcon from './map-icon.png'
import { LocationContainer } from './styles'

const PIN = new Leaflet.Icon({
  iconUrl: mapIcon,
})

interface Props {
  latitude: number
  longitude: number
  informationPopup?: ReactNode
  hiddenDescriptions?: boolean
}

export function LocationMap(props: Props) {
  const { latitude, longitude, hiddenDescriptions, informationPopup } = props

  if (!latitude || !longitude) {
    return <></>
  }

  return (
    <LocationContainer>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} icon={PIN}>
          {!hiddenDescriptions && <Popup>{informationPopup}</Popup>}
        </Marker>
      </MapContainer>
      {!hiddenDescriptions && (
        <div className="btn-google-maps">
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
          >
            <span>Ver rotas no Google Maps</span>
          </Link>
        </div>
      )}
    </LocationContainer>
  )
}
