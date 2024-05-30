import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Weather from './components/Weather';

function App() {
  //hook
  const[city,setCity]=useState('');
  const[country,setCountry]=useState('');
  const[timezone, setTimezone]=useState('');
  const[localTime,setLocalTime]=useState('');
  const[icon,setIcon]=useState('');
  const[temperature, setTemperature]=useState('');
  const[visibility,setVisibility]=useState('');
  const[windDirection,setWindDirection]=useState('');
  const[windSpeed, setWindSpeed]=useState('');


  //func
  const getWeather = async (event) => {
    event.preventDefault();
    const apiKey = "7081376b10074e058ce183023201208";
    const apiCity = event.target.elements.city.value;
    if (apiCity.trim() === '') {
        alert('You did not enter a city name.');
    } else {
        let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${apiCity}`;
        let apiData = await fetch(apiUrl);
        if (apiData.status === 400) {
            alert('City with this name does not exist in the database.');
        } else {
            let apiJson = await apiData.json();
            setCity(apiJson.location.name);
            setCountry(apiJson.location.country);
            setTimezone(apiJson.location.tz_id);
            setIcon(apiJson.current.condition.icon);
            setLocalTime(apiJson.location.localtime);
            setTemperature(apiJson.current.temp_c);
            setWindSpeed(apiJson.current.wind_kph);
            setVisibility(apiJson.current.vis_km);
            setWindDirection(apiJson.current.wind_dir);
            console.log("is request");
        }
    }
};

  return (
    <div className="App">
      <Header/>
      <Main submitHadnler={getWeather}/>
      <Weather
        city={city}
        icon={icon}
        country={country}
        localTime={localTime}
        timezone={timezone}
        temperature={temperature}
        visibility={visibility}
        windDirection={windDirection}
        windSpeed={windSpeed}
      />
      <Footer/>
    </div>
  );
}

export default App;
