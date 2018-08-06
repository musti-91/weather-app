import React from "react";
// todayWeather
import { f2c, getImage } from "./helper";
var images = {
  "01d": require("../images/01d.png"),
  "01n": require("../images/01n.png"),
  "02d": require("../images/02d.png"),
  "02n": require("../images/02n.png"),
  "03d": require("../images/03d.png"),
  "03n": require("../images/03n.png"),
  "04d": require("../images/04d.png"),
  "04n": require("../images/04n.png"),
  "09d": require("../images/09d.png"),
  "09n": require("../images/09n.png"),
  "10d": require("../images/10d.png"),
  "10n": require("../images/10n.png"),
  "11d": require("../images/11d.png"),
  "11n": require("../images/11n.png"),
  "13d": require("../images/13d.png"),
  "13n": require("../images/13n.png"),
  "50d": require("../images/50d.png"),
  "50n": require("../images/50n.png")
};
export const TodayWeather = props => {
  let min = props.todayWeather.main.temp_min;
  let max = props.todayWeather.main.temp_max;
  return (
    <div>
      <div className="imageContainer">
        {props.todayWeather.weather[0].icon !== 0 ? (
          <img
            src={getImage(props.todayWeather.weather[0].icon, images)}
            alt=""
          />
        ) : (
          <p>image not loaded</p>
        )}
      </div>
      <h2 style={{ textTransform: "capitalize" }}>
        {props.todayWeather.weather[0].description} <br />
        <span>{f2c(props.todayWeather.main.temp)}°C</span>
      </h2>
      <p>
        min. {f2c(min)}°C / max. {f2c(max)}°C
      </p>
    </div>
  );
};
