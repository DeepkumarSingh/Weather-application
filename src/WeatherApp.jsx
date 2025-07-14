import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp() {
    let [weatherData, setWeatherData] = useState({
        city : "Delhi",
        temp :  25.06,
        tempMin : 25.06,
        tempMax :  25.06,
        humidity : 47,
        pressure :100,
        feelsLike : 25.06 ,
        windSpeed : 40,
        weather : "haze",
    });
    let updateWeatherData = (newInfo) => {
        setWeatherData(newInfo);
    }
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Welcome to My Weather App</h1>
            <SearchBox updateWeatherData={updateWeatherData}/>
            <InfoBox info={weatherData}/>
            <footer>
                <p>Made with ❤️ by Deep</p>
                </footer>
        </div>
    )
}