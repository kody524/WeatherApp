import { Card, CardContent, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import styles from './WeeklyForecast.module.css'
import { dailyForecast } from './apiCalls';
export function WeeklyForecast({zip,future}){

console.log(future)

let a = future.data
console.log(a)
       
        return(
        <><div className={styles.title}>7 day forecast</div><div className={styles.cardContainer}>
                {a.map(data => {
                    return (
                        <div className={styles.cards}>
                            <Card sx={{ width: 200, textAlign: 'center', backgroundColor: 'transparent', border: 'none', borderColor: 'transparent' }}>
                                <div className={styles.info}>
                                    <CardContent className={styles.info}>
                                        <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                            max:{data.app_max_temp}
                                        </Typography>
                                        <Typography>
                                            Min: {data.app_min_temp}
                                        </Typography>
                                        <Typography>
                                            Temperature:
                                        </Typography>
                                        <Typography>
                                            Feels Like:
                                        </Typography>
                                        <Typography>
                                            Precipitation:
                                        </Typography>
                                        <Typography>
                                            Wind Gust:
                                        </Typography>
                                        <Typography>
                                            Wind Direction:
                                        </Typography>
                                    </CardContent>

                                </div>

                            </Card>
                        </div>
                    );
                })} </div></> )
       
    
}