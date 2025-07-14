import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
import { useState } from 'react';
import ThumbDownOffAltSharpIcon from '@mui/icons-material/ThumbDownOffAltSharp';
export default function SearchBox({ updateWeatherData }) {
    let [city,setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="e6f4bf7a4e8852283ae14fa6061d1507";
    let getWeatherData = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            pressure : jsonResponse.main.pressure,
            feelsLike : jsonResponse.main.feels_like,
            windSpeed : jsonResponse.wind.speed,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
    }

    let handleChangeCity = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            console.log("City Name: ", city);
            setCity("");
            let newInfo = await getWeatherData();
            updateWeatherData(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                label="Enter City or Country" 
                variant="outlined" 
                required 
                value = {city}
                onChange={handleChangeCity}
                /><br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color: 'red', display:'flex', justifyContent:'center'}}>No such place found &nbsp;<ThumbDownOffAltSharpIcon color="action" fontSize='small'/></p>}
            </form>
        </div>
    );
}