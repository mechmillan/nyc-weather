import React, { Component, Fragment } from "react";

class SingleDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonData: [],
      currentMeasurement: "Celsius",
      currentShort: "C"
    };

    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrentWeather = this.fetchCurrentWeather.bind(this);
  }

  fetchCurrentWeather() {
    // TODO: add process.env to limit keys uploaded to Github
    let id = "y3FYC2sF8soVqME6k1OZM";
    let secret = "nALkHobvOaaUJ8VmdZKOROapiVHSfHVj4RsjZIuo";
    let zip = "10039";

    return fetch(
      `https://api.aerisapi.com/forecasts/${zip}?client_id=${id}&client_secret=${secret}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          jsonData: data.response[0].periods
        });
      })
      .catch(err => console.log(err));
  }

  handleClick(event) {
    let { currentMeasurement } = this.state;
    if (currentMeasurement === "Celsius") {
      this.setState({
        currentMeasurement: "Farenheit",
        currentShort: "F"
      });
    } else {
      this.setState({
        currentMeasurement: "Celsius",
        currentShort: "C"
      });
    }
  }

  componentWillMount() {
    this.fetchCurrentWeather();
  }

  render() {
    let sevenDayForecast = this.state.jsonData;
    let { currentMeasurement, currentShort } = this.state;

    return (
      <Fragment>
        <button className="button" onClick={this.handleClick}>
          Toggle from {currentMeasurement}
        </button>

        <ul className="container">
          {currentShort === "C"
            ? sevenDayForecast && sevenDayForecast.map(data => {
                return (
                  <li className="weather-card" key={data.timestamp}>
                    <div>
                      <strong>Date:</strong> {data.dateTimeISO.slice(0, 10)}
                    </div>
                    <div>
                      <strong>High Temp:</strong> {data.maxTempC}º{currentShort}
                    </div>
                    <div>
                      <strong>Low Temp:</strong> {data.minTempC}º{currentShort}
                    </div>
                    <img
                      src={`/icons/${data.icon}`}
                      alt={data.weatherPrimary}
                      height="55px"
                      width="55px"
                      title={data.weatherPrimary}
                    />
                    <div>
                      <h5>{data.weatherPrimary}</h5>
                    </div>
                  </li>
                );
              })
            : sevenDayForecast.map(data => {
                return (
                  <li className="weather-card" key={data.timestamp}>
                    <div>
                      <strong>Date:</strong> {data.dateTimeISO.slice(0, 10)}
                    </div>
                    <div>
                      <strong>High Temp:</strong> {data.maxTempF}º{currentShort}
                    </div>
                    <div>
                      <strong>Low Temp:</strong> {data.minTempF}º{currentShort}
                    </div>
                    <img
                      src={`/icons/${data.icon}`}
                      alt={data.weatherPrimary}
                      height="55px"
                      width="55px"
                      title={data.weatherPrimary}
                    />
                    <div>
                      <h5>{data.weatherPrimary}</h5>
                    </div>
                  </li>
                );
              })}
        </ul>
      </Fragment>
    );
  }
}

export default SingleDay;
