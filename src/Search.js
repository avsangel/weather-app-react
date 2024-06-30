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
      />
      <input type="submit" value="submit" />
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
      <div>
        {form}
        <h4> The weather in {city} is currently</h4>
        <ul>
          <li>Temperature: {Math.round(temperature)}°F</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Description of the image"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
