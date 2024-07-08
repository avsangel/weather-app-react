import React, { useState } from "react";

export default function TempCon(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div>
        Temperature: {Math.round(props.fahrenheit)} °F |{" "}
        <a href="/" onClick={showCelsius}>
          °C{" "}
        </a>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div>
        Temperature: {Math.round(celsius)}{" "}
        <a href="/" onClick={showFahrenheit}>
          °F{" "}
        </a>{" "}
        | °C
      </div>
    );
  }
}
