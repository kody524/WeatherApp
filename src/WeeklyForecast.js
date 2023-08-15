import { Card, CardContent, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import styles from './WeeklyForecast.module.css'
import { dailyForecast } from './apiCalls';
export function WeeklyForecast({zip,future}){

console.log(future)
let a = future.data

console.log(a)
       
        return( 
        <>
        {future.length<1?null:<span className={styles.title}>Futurecast</span>}
        <div className={styles.cardContainer}>
            {future.length<1?null:
           
                a.map((data,ind) => {
                   if(ind===0){
                    return null
                   }
                    return (
                        <div className={styles.cards}>
                            
                            <Card sx={{ width: 200, textAlign: 'center', backgroundColor: 'transparent', border: 'none', borderColor: 'transparent' }}>
                                <div className={styles.info}>
                                    <CardContent className={styles.info}>
                                        <Typography>
                                            {data.datetime.split('').splice(5)}
                                        </Typography>
                                        <Typography>
                                            {data.weather.description}
                                        </Typography>
                                        <Typography>
                                            High:{Math.floor(data.app_max_temp * 1.8 + 32)}
                                        </Typography>
                                        <Typography>
                                            Low: {Math.floor(data.app_min_temp * 1.8 + 32)}
                                        </Typography>
                                        <Typography>
                                            Precipitation:{data.precip}%
                                        </Typography>
                                    </CardContent>

                                </div>

                            </Card>
                        </div>
                    );
                })} </div></> )
       
    
}