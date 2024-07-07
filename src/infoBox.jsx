import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const Hot="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cloudy = "https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rain = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>  
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? rain : info.temp < 15 ? cold : info.humidity >65 ? cloudy : Hot}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {info.humidity > 80 ? 
                    <ThunderstormIcon/> : 
                    info.temp < 15 ? 
                    <AcUnitIcon/> : 
                    info.humidity >65 ? 
                    <CloudIcon/> : <WbSunnyIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"} >
                    <p>Temperature= {info.temp}&deg;C</p>
                    <p>Feels Like= {info.feelsLike}&deg;C</p>
                    <p>Min Temperature= {info.tempMin}&deg;C</p>
                    <p>Max Temperature= {info.tempMax}&deg;C</p>
                    <p>Humidity= {info.humidity} </p>
                    <p>
                        The weather can be described as <i><b>{info.weather}</b></i>.
                    </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>      
        </div>
    )
}