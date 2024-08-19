import React, { createContext, useState } from "react";
import "./App.css";
import Appbox from "./components/App box/Appbox";
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";

// Context create karo
export const MyContext = createContext();

function App() {
  const apiKey = "e36dfb1c2af1f37f6fb762467dcb784e";
  const [weatherData, setWeatherData] = useState(false);

  const Allicons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      const icon = Allicons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: Math.floor(data.main.humidity),
        wind: Math.floor(data.wind.speed),
        location: data.name,
        tempreture: Math.floor(data.main.temp),
        icon: icon,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MyContext.Provider value={{weatherData,search}}>
      <div className="container">
        <Appbox />
      </div>
    </MyContext.Provider>
  );
}

export default App;
