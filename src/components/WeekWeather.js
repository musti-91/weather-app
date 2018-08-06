import React from "react";
import moment from "moment";
import { f2c, getImage } from "./helper";
moment.locale("nl-be");
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
export const WeekWeather = props => {
  const getWeekWeather = () => {
    const weekWeather = [];
    let length = props.list.length;
    let previous = null;
    let next = null;
    for (let i = 0; i < length; i++) {
      previous = props.list[i].dt_txt.substring(8, 10);
      next = props.list[i++].dt_txt.substring(8, 10);
      if (next === previous) {
        weekWeather.push(props.list[i]);
      }
    }
    return weekWeather;
  };

  return (
    <div>
      <ul className="daysContent">
        {getWeekWeather().map((day, index) => (
          <li key={index}>
            <div>
              <span>{moment.unix(day.dt).format("dddd")}</span>
            </div>
            <div>
              <img src={getImage(day.weather[0].icon, images)} alt="" />
            </div>
            <div>
              {f2c(day.main.temp_min)}°C
              <span> {f2c(day.main.temp_max)}°C</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
