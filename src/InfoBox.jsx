import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import StormIcon from '@mui/icons-material/Storm';
import CompressSharpIcon from '@mui/icons-material/CompressSharp';
import WavesSharpIcon from '@mui/icons-material/WavesSharp';
import AirSharpIcon from '@mui/icons-material/AirSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
export default function InfoBox({ info}) {
    const INIT_IMG_URL = "https://cdn.pixabay.com/photo/2022/08/21/02/26/road-7400333_1280.jpg";
    let COLD_URL = "https://cdn.pixabay.com/photo/2019/12/08/19/50/winter-4682051_1280.jpg";
    let HOT_URL = "https://cdn.pixabay.com/photo/2016/11/19/12/21/man-1838991_1280.jpg";
    let RAIN_URL = "https://cdn.pixabay.com/photo/2018/08/03/11/18/man-3581659_1280.jpg";
    return (
        <div className="Info-box"> 
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.temp < 15
                            ? COLD_URL
                            : info.humidity > 80
                                ? RAIN_URL
                                : HOT_URL
                    }
                    title="weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;
                    {
                        info.temp < 15
                            ? <AcUnitSharpIcon/>
                            : info.humidity > 80
                                ? <ThunderstormSharpIcon/>
                                : <WbSunnySharpIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p style={{display: 'flex', alignItems: 'center'}}>Temperature = {info.temp}°C<DeviceThermostatIcon color="action" fontSize='small'/></p>
                    <p style={{display: 'flex', alignItems: 'center'}}>Humidity = {info.humidity} <WavesSharpIcon color="action" fontSize='small'/></p>
                    <p style={{display: 'flex', alignItems: 'center'}}>Min-Temperature = {info.tempMin}<DeviceThermostatIcon color="action" fontSize='small'/></p>
                    <p style={{display: 'flex', alignItems: 'center'}}>Max-Temperature = {info.tempMax}<DeviceThermostatIcon color="action" fontSize='small'/></p>
                    <p style={{display: 'flex', alignItems: 'center'}}>Pressure= {info.pressure}<CompressSharpIcon color="action" fontSize='small'/></p>
                    <p style={{display: 'flex', alignItems: 'center'}}>Wind-Speed = {info.windSpeed}<AirSharpIcon color="action" fontSize='small'/></p>
                    <p>The Weather can be described as {info.weather} and feels like {info.feelsLike}°C</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
        </div>
    )
}