import "leaflet/dist/leaflet.css"
import { FC } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const MapComponent: FC = () =>{
  
      return (
        <MapContainer className={'map'} center={{ lat: 9.077751, lng: 8.6774567 }} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      );
}

export default MapComponent