import React, { useEffect, useState } from 'react';
import Header from './component/header.jsx';
import Weather from './component/Weather.jsx';
import WStatus from './component/WStatus.jsx';
import './App.css';

const App = () => {
   const [Wlocation,setWlocation] = useState({});
   const [weather,setWeather]= useState([]);
   const [error,setError]= useState(null)
  useEffect(()=>{
    async function getWeather() {
      try{

        const response = await fetch(" http://api.weatherapi.com/v1/current.json?key=e912b258615e4a5bb29182157261402&q=24.695116,46.680507");
        const result = await response.json();
        const {location,current}=  result
        setWlocation(location);//not update it yet
        setWeather(current);//not update it yet
        console.log(current)
      }
      catch(err)
      {
        setError(err.message);
      }
  }
  getWeather()
  },[])
  if (error) return <div>Error: {error}</div>;
  if(!Wlocation && !weather )return<div>loading...</div>
  
  return ( 
    <div className="container">
      <div className="weather-card">
        {/* Header: Location Info */}
      <Header city={Wlocation.region} country={Wlocation.country} />
        {/* Main Weather Section */}
        <Weather icon={weather?.condition?.icon} temperature={weather.temp_c} text={weather?.condition?.text} />
        {/* Stats Grid */}
        <WStatus Humidity={weather.humidity} Wind={weather.wind_kph} Pressure={weather.pressure_in} />
      </div>
    </div>
  );
};

export default App;