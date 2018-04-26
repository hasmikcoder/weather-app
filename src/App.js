import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";


const API_KEY = "a994c811642c4c8a4bfa3c449c2d8201"

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/
      weather?q=London,uk&appid= ${API_KEY}`);
      const data = await api_call.json();
      console.log(data);
  }

   render(){
     return (
       <div>
         <Titles/>
         <Form/>
         <Weather/>
       </div>
     );
   }
 }

 export default App;
