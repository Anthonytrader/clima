import React, { useState } from "react";
import "./Styles/WeatherCard.css";


const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <article className="weather">
      <h1 className="weather_title">Weather App</h1>
      <h2 className="weather_location">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <section className="weather_body">
        <header className="weather_img-container">
          <img className="weather_img"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" />

        </header>
        <article className="weather_info">
          <h3 className="weather_condition">{weather?.weather[0]?.description}</h3>
          <ul className="weather_list">
            <li className="weather_item">
              <span className="weather_label">Wind Speed: </span>
              <span className="weather_value">{weather?.wind.speed} m/s</span>
            </li>
            <li className="weather_item">
              <span className="weather_label">Clouds: </span>
              <span className="weather_value">{weather?.clouds?.all}%</span>
            </li>
            <li className="weather_item">
              <span className="weather_label">Pressure: </span>
              <span className="weather_value">{weather?.main.pressure} hPa</span>
            </li>
          </ul>
        </article>
      </section>
      <h2 className="weather_temp">
        {isCelsius
          ? `${temp?.celsius}°C`
          : `${temp?.fahrenheit}°F`}
      </h2>
      <button className="weather_btn" onClick={handleChangeTemp}>
        Change to {isCelsius ? "°F" : "°C"}
      </button>
    </article>
  );
};

export default WeatherCard;
