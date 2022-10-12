import L from 'leaflet';
import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'

const MyComponent = ({details:{latitude, longitude}}) => {
    function onLocate(e){
        const latlng = L.latLng(latitude, longitude);
        map.flyTo(latlng, map.getZoom())
    }

    const map = useMap()
    map.locate()
    map.on('locationfound',onLocate)

    return (
        <Marker position={[latitude,longitude]}>
          <Popup>You are here</Popup>
        </Marker>
      )
}

export default MyComponent