import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [info , setInfo] = useState({

        city :"",
        feelsLike: "",
        temp: "",
        tempMax: "",
        tempMin: "",
        humidity: "",
        weather: "",
    })

    let updateInfo =(newInfo) =>{
        setInfo(newInfo);
    }
    return(
        <div className="wp">
            <h1 style={{ backgroundColor: '#1A5319', padding: '10px' , textAlign : 'center' , color : 'white' }}><b>Weather Finder</b></h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={info}/>
        </div>
    )
}