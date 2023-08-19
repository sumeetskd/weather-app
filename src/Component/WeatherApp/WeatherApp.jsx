import React, { useState } from 'react'
import './WeatherApp.css'

import clear_cloud_icon from '../Assets/clear_cloud_icon.png'
import cloudy_icon from '../Assets/cloudy_icon.png'
import overcast_icon from '../Assets/overcast_icon.png'
import rainy_icon from '../Assets/rainy_icon.png'
import snow_icon from '../Assets/snow_icon.png'
import sunny_icon from '../Assets/sunny_icon.png'
import search_icon from '../Assets/search_icon.png'
import humid from '../Assets/humid.png'
import rain from '../Assets/rain.png'

const WeatherApp = () => {
  let apiKey = "906e6d09aa039a4d16e497b2ee6f334a";

  const [wicon, setWicon] = useState(clear_cloud_icon);

  const search = async ()=>{
    const element = document.getElementsByClassName('cityInput');
    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temprature[0].innerHTML = data.main.temp+" *C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon.includes("01")){
      setWicon(sunny_icon);
    }
    else if(data.weather[0].icon.includes("02")){
      setWicon(overcast_icon);
    }
    else if(data.weather[0].icon.includes("03")){
      setWicon(clear_cloud_icon);
    }
    else if(data.weather[0].icon.includes("04")){
      setWicon(cloudy_icon);
    }
    else if(data.weather[0].icon.includes("09")){
      setWicon(rainy_icon);
    }
    else if(data.weather[0].icon.includes("10")){
      setWicon(rainy_icon);
    }
    else if(data.weather[0].icon.includes("13")){
      setWicon(snow_icon);
    }
    else{
      setWicon(clear_cloud_icon);
    }


  }

  return (
    <div className='container'>
        <div className='top-bar'>
          <input type="text" className="cityInput" placeholder='search' />
          <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" width="50" />
          </div>
        </div>
        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24*C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={rain} alt="" className="icon"/>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={humid} alt="" className="icon"/>
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp