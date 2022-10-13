import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconMap from '../../../assets/icons/icon-location.svg'
import MyComponent from './MyComponent';

let DefaultIcon = L.icon({
    ...L.Icon.Default.prototype.options,
    iconUrl: iconMap,
    iconRetinaUrl: iconMap,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({details}) => {
    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{ width: '100%', height: '100%', margin: '0%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyComponent details={details}/>
        </MapContainer>
    )
}
export default Map