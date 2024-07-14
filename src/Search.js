import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormatedDate from "./FormatedDate";
import TempCon from "./TempCon";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search="
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <input type="submit" value="submit" />
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    find();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function find() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25&units=imperial
    `;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="form">{form}</div>
        <h2> {city}</h2>
        <ul>
          <li>
            <FormatedDate date={weatherData.date} />
          </li>
          <li>Description: {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="temperature">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="current"
                className="float-left"
              />{" "}
              <div className="float-left">
                <TempCon fahrenheit={weatherData.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
