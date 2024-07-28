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

//from L getting the icon, here L is a global object of leaflet, containing all the function and classes
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map: React.FC = () => {

  //fetching the data using react-query and caching it
  //Here we are using the "fetchCountrySpecifiData" that we defined in the services/api
  const { data, error, isLoading } = useQuery<CountryData[], Error>({
    queryKey: ['countryData'],
    queryFn: fetchCountrySpecificData,
  });

  if (isLoading) return <div>Loading...</div>;

  //error handling
  if (error) return <div>Error fetching data</div>;

return (
    //this is the map container that will contain our map, it has been styled with z-axis = 0 because, else it will come above all the divs
    <MapContainer center={[20.5, 78]} zoom={3} className="map-container  z-0">
      {/*Here for the provider, "Open Street Map" is being used to make tiles*/}
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/*from the data, we are mapping each element as "country", therefore each country has 
	country, cases, active, recovered, deaths and countryInfo which is of type CountryInfo
      */}
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

