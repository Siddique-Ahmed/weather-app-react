import React, { useContext } from "react";
import "../../App.css";
import humidity from "../../Assets/humidity.png";
import wind from "../../Assets/wind.png";
import { MyContext } from "../../App";

const Appdetail = () => {
  const { weatherData } = useContext(MyContext);  // Destructure weatherData

  return (
    <>
      {weatherData ? (
        <div className="app_details">
          <div className="img_box">
            <img src={weatherData.icon} alt="weather icon" />
          </div>
          <div className="degre_box">
            <h1>
              {weatherData.tempreture} <sup>°</sup>C
            </h1>
          </div>
          <div className="cityname_box">
            <h1>{weatherData.location}</h1>
          </div>
          <div className="weather_box">
            <div className="humidity">
              <img src={humidity} alt="humidity icon" />
              <div className="humidity_detail">
                <p>{weatherData.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <img src={wind} alt="wind icon" />
              <div className="wind_detail">
                <p>{weatherData.wind} KM/H</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="error">No data Available</p>
      )}
    </>
  );
};

export default Appdetail;
