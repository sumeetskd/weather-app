import React from 'react'
import './WeatherApp.css'

import big_cloud_icon from '../Assets/big_cloud_icon.png'
import big_sun_icon from '../Assets/big_sun_icon.png'
import clear_cloud_icon from '../Assets/clear_cloud_icon.png'
import cloudy_icon from '../Assets/cloudy_icon.png'
import overcast_icon from '../Assets/overcast_icon.png'
import rainy_icon from '../Assets/rainy_icon.png'
import snow_icon from '../Assets/snow_icon.png'
import sunny_icon from '../Assets/sunny_icon.png'
import search_icon from '../Assets/search_icon.png'
import wind_dir from '../Assets/wind_dir.png'
import wind_speed from '../Assets/wind_speed.png'
import humid from '../Assets/humid.png'
import hot from '../Assets/hot.png'
import rain from '../Assets/rain.png'

const WeatherApp = () => {
  let apiKey = "906e6d09aa039a4d16e497b2ee6f334a";
  return (
    <div className='container'>
        <div className='top-bar'>
          <input type="text" className="cityInput" placeholder='search' />
          <div className="search-icon">
            <img src={search_icon} alt="" width="50" />
          </div>
        </div>
        <div className="weather-image">
          <img src={overcast_icon} alt="" />
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
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp