import { useState } from "react";
import axios from'axios';

const Form = ({data, setData}) => {
    const [city, setCity] = useState('');

    const getWeather = (city) => {
        let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
        
        axios(APILink)
        .then(({data}) => {
            setData(data);
            console.log("Weather Data:", data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
    }

    return (
        <div className="form">
            <input 
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                value={city} 
                type="text" 
            />
            <button 
                onClick={() => {
                    getWeather(city);
                }}
            >
                Get
            </button>
        </div>
    );
}

export default Form;
