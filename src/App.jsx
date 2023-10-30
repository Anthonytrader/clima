
import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
 import './App.css'

function App() {
  const [coords, setCoords] = useState(); 
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState(); 
  const [isLoading, setIsLoading] = useState(true);

  const success = (position) => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setCoords(obj);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const APIKEY = `7da78023a1b824fa4fca972031b41f4a`;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;

      axios
        .get(url)
        .then((response) => {
          const celsius = (response.data.main.temp - 273.15).toFixed(1);
          const fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);
          setTemp({ celsius, fahrenheit });
          setWeather(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [coords]);


  return (
    <div className="app">
      {isLoading ? (
        <h2 className="app-loader">Loading...</h2>
      ) : (
        <WeatherCard weather={weather} temp={temp} />
      )}
    </div>
  );
  
}

export default App;

