import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";


const API_KEY = "a994c811642c4c8a4bfa3c449c2d8201";

class App extends React.Component {

  state = {
  //  temperature: undefined,
    //city: undefined,
    //country: undefined,
    //humidity: undefined,
    //description: undefined,
    //error: undefined,

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.name.city.value;
    const country = e.target.elements.name.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/
      weather?q=${city},${country}&appid= ${API_KEY}&units=metric`);
      const data = await api_call.json();
      if (city && country)
      console.log(data);
      this.setState({
         temperature: undefined,
         city: undefined;
         country: undefined,
         humidity: undefined,
         description: undefined,
        error: "Please enter the value."

      });
  }
}

   render(){
     return (
       <div>
         <Titles/>
         <Form getWeather={this.getWeather}/>
         <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
         />
       </div>
     );
   }
 };

 export default App;
