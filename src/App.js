import React, { Component } from 'react';

import './App.css';

import 'weather-icons/css/weather-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';



const API_key=  process.env.REACT_APP_WEATHER_API_KEY;


class App extends Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      description:"",
      error: false
    };
    
    
    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain : "wi-rain",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog",
    };
  }

  calCelsius(temp)
  {
    let cel=Math.floor(temp-273.15)
    return cel;
  }

  getWeatherIcon(icons,idrange)
  {
    switch(true)
    {
      case idrange >=200 && idrange<=232:
       this.setState({icon:this.weatherIcon.Thunderstorm});
       break;
      case idrange >=300 && idrange<=321:
       this.setState({icon:this.weatherIcon.Drizzle});
       break; 
      case idrange >=500 && idrange<=531:
       this.setState({icon:this.weatherIcon.Rain});
       break;
       case idrange >=600 && idrange<=622:
       this.setState({icon:this.weatherIcon.Snow});
       break;
      case idrange >=701 && idrange<=781:
       this.setState({icon:this.weatherIcon.Atmosphere});
       break;
      case idrange ===800:
       this.setState({icon:this.weatherIcon.Clear});
       break;
      case idrange >=801 && idrange<=804:
       this.setState({icon:this.weatherIcon.Clouds});
       break;
      default:
       this.setState({icon:this.weatherIcon.Clouds});
    }
  }
 
  getWeather = async (e) =>{

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

  if(city && country) 
  {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city:`${response.name}, ${response.sys.country}`,
      
      celsius:this.calCelsius(response.main.temp),
      description:response.weather[0].description,
      
    });
    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
  }
  else
  this.setState({error:true});
  };
 render(){
  return (
    <div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
    <Weather 
    city={this.state.city} 
    country={this.state.country}
    temp_celsius={this.state.celsius}
    description={this.state.description}
    weatherIcon={this.state.icon}
    />
    </div>
  );
 }  
}

export default App;




