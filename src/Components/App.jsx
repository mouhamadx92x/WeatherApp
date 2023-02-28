import React, { useState } from "react";
import axios from "axios";
import "../Style/App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=919777219eec1ff8b9953ecf61212a36`;

  const fetchdate = async () => {
    const res = await axios.get(url);
    setData(res.data);
    console.log(res.data);
  };

  // const fetchdate = async () => {
  //   const res = await fetch(url);
  //   const fetcheddate = await res.json();
  //   console.log(fetcheddate);
  //   setData(fetcheddate);
  // };

  return (
    <div className="app">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button onClick={fetchdate}>Search</button>
      </div>
      {(
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}&#176;</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main} </p> : null}
            </div>
          </div>
          {data.main != undefined && (
            <div className="bottom">
              <div className="fell">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}&#176;</p>
                ) : null}
                <p className="bold">Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}

                <p className="bold">Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed}</p> : null}
                <p className="bold">Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      ) ||
        data.main.feels_like || <h1>NO</h1>}
    </div>
  );
}

export default App;
