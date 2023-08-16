import styles from './CurrentWeather.module.css'
import { Card, CardContent, Typography } from '@mui/material';
import { WeeklyForecast } from './WeeklyForecast';
function CurrentWeather({current,zip,future,setFuture}){
    console.log(future)
return(
    <><div className={styles.cardContainer}>
        <Card sx={{ width: 500, textAlign: 'center', backgroundColor: 'transparent' }}>
            {current.length < 1 ? null : <div className={styles.info}>
                <CardContent className={styles.container}>
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                        {current.data[0].city_name}
                    </Typography>
                    <Typography>
                        {current.data[0].weather.description}
                    </Typography>
                    <Typography>
                        Temperature: {Math.floor(current.data[0].temp * 1.8 + 32)}
                    </Typography>
                    <Typography>
                        Feels Like: {Math.floor(current.data[0].app_temp * 1.8 + 32)}
                    </Typography>
                    <Typography>
                        Precipitation: {current.data[0].precip}%
                    </Typography>
                    <Typography>
                        Wind Gust: {Math.floor(current.data[0].gust)}mph
                    </Typography>
                    <Typography>
                        Wind Direction: {current.data[0].wind_cdir}
                    </Typography>
                </CardContent>

            </div>}

        </Card>

    </div>
    
    <WeeklyForecast zip={zip} future={future} /></>

)


}

export default CurrentWeather;

