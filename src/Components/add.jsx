{/* <div className="app">
     
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
    </div> */}