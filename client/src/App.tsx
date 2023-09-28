import React, {useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapMarker from './components/MapMarker';
import Chart from './components/Chart';
import { City } from './types'
import Stack from '@mui/material/Stack';

const containerStyle = {
  width: "50vw",
  height: "50vh"
};

const cities = [
  { "city": "Toronto", "latitude": 43.70, "longitude": -79.42 },
  { "city": "Vancouver", "latitude": 49.28, "longitude": -123.12 },
  { "city": "Montreal", "latitude": 45.51, "longitude": -73.59 },
  { "city": "Calgary", "latitude": 51.05, "longitude": -114.07 },
  { "city": "Ottawa", "latitude": 45.42, "longitude": -75.70 },
  { "city": "Edmonton", "latitude": 53.54, "longitude": -113.49 },
  { "city": "Quebec City", "latitude": 46.81, "longitude": -71.21 },
  { "city": "Winnipeg", "latitude": 49.90, "longitude": -97.14 },
  { "city": "Halifax", "latitude": 44.65, "longitude": -63.58 },
  { "city": "Saskatoon", "latitude": 52.13, "longitude": -106.67 }
]

const zoom = 4;

const getCityPosition = (city: { city: string, latitude: number, longitude: number }) => ({
  lat: city?.latitude, lng: city.longitude
})

const App = () => {
  const [selectedCityPosition, setSelectedCityPosition] = useState({} as City)

  const handleSelectCity = (lat:  number, long:  number) => {
    setSelectedCityPosition({latitude: lat, longitude: long})
  }

  return (
  <Stack  direction="row">
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={getCityPosition(cities[0])}
        zoom={zoom}
      >
        {cities.map((city) =>
          <MapMarker position={getCityPosition(city)} setSelectedCityPosition = {handleSelectCity}/>
        )}
      </GoogleMap>
    </LoadScript>
    <Chart selectedCityPosition = {selectedCityPosition}/>
  </Stack>
  );
}

export default React.memo(App)
