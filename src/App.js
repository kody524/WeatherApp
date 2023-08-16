import styles from "./App.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { dailyForecast, getCurrent } from "./apiCalls";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function App() {
  const [zip, setZip] = useState(0);
  const [current, setCurrent] = useState([]);
 const [future, setFuture]=useState([])

  
  return (
    <>
      <body className={styles.body}>
      <div className={styles.mainTitle}>Weather</div>
        <div className={styles.srchcontainer}>
          
          <TextField
          sx={{backgroundColor:'white',borderRadius:5,borderColor:'transparent'}}
            className={styles.search}
            
            onChange={(e) => {
            setZip(e.target.value)
            }}
            placeholder="Zip"
          />
          
          <span>
            
            <Button
            sx={{backgroundColor:'transparent',color:'white',borderRadius:5,marginTop:1,marginLeft:1}}
            variant="contained"
              onClick={() => {
                
                getCurrent(zip, setCurrent);
                dailyForecast(zip,setFuture)
              }}
            >
              Submit
            </Button>
          </span>
        </div>
        <CurrentWeather current={current} future={future} zip={zip} setFuture={setFuture}/>
      </body>
    </>
  );
  
}

export default App;
