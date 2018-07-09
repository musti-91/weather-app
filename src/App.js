import React, { Component } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";

import { TodayWeather } from "./components/TodayWeather";
import { WeekWeather } from "./components/WeekWeather";
class App extends Component {
  state = {
    weatherList: [],
    navigator: navigator.onLine
  };
  componentDidMount() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=kontich,be&mode=json&appid="
      )
      .then(response => {
        this.setState({
          weatherList: response.data.list
        });
      })
      .catch(error => console.log(error));
  }
  failedConnection = () => (
    <div className="noConnection">
      <h1>{";("}</h1>
      <span>not Connected to the interwebs.</span>
      <p> try again, after establishing network connection</p>
    </div>
  );
  successConnection = () =>
    this.state.weatherList.length !== 0 ? (
      <div className="container">
        <div className="todayWeather">
          <TodayWeather todayWeather={this.state.weatherList[0]} />
        </div>
        <div className="weekWeather">
          <WeekWeather list={this.state.weatherList} />
        </div>
      </div>
    ) : (
      <div>weather results not loaded yet</div>
    );
  render() {
    return (
      <div className={this.state.navigator ? "content" : "error"}>
        <div className="refreshButton" onClick={() => window.location.reload()}>
          <Icon name="refresh">
            <span>refresh</span>
          </Icon>
        </div>
        {!this.state.navigator
          ? this.failedConnection()
          : this.successConnection()}
      </div>
    );
  }
}

export default App;
