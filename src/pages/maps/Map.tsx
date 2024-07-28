// src/components/pages/Map.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCountrySpecificData } from '../../services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import { CountryData } from '../../types/CountryData';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configure the default icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map: React.FC = () => {
  const { data, error, isLoading } = useQuery<CountryData[], Error>({
    queryKey: ['countryData'],
    queryFn: fetchCountrySpecificData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

return (
    <MapContainer center={[20.5, 78]} zoom={3} className="map-container  z-0">
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data?.map((country: CountryData) => (
        country.countryInfo._id && (
          <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};
export default Map;

