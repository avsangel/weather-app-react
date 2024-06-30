import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search="
        placeholder="Enter a City..."
        onChange={updateCity}
        className="input-box"
      />
      <input className="button" type="submit" value="submit" />
    </form>
  );

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  function showDescription(response) {
    setDescription(response.data.weather[0].description);
  }
  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }
  function showWind(response) {
    setWind(response.data.wind.speed);
  }
  function showIcon(response) {
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=515c9ddbeb3cda9061acfab71031839e&units=imperial
    `;
    axios.get(url).then(showTemperature);
    axios.get(url).then(showWind);
    axios.get(url).then(showHumidity);
    axios.get(url).then(showDescription);
    axios.get(url).then(showIcon);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div className="out">
        <div className="form">
          {form}
        </div>
        <h4 className="heading"> Weather: {city}</h4>
        <div className="container">
          <ul>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Description"
                className="image"
              />
            </li>
            <li className="temp">{Math.round(temperature)}°F</li>
            <li className="des">{description}</li>
            <div className="mess">
              <li className="list-item">Humidity: {humidity}%</li>
              <li className="list-item">Wind: {wind}km/h</li>
            </div>

          </ul>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
