import axios from "axios";

export default class API {
  constructor(options ={}) {
    this.client =axios.create({
      baseURL: process.env.REACT_APP_WEATHER_URL,
    });
  }

  getWeather(city){
    return this.client.get(`weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
  }
}