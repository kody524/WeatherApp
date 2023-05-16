import styles from "./App.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { getCurrent } from "./apiCalls";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function App() {
  const [zip, setZip] = useState(0);
  const [current, setCurrent] = useState([]);
console.log(current)


  return (
    <>
      <body className={styles.body}>
        <div className={styles.srchcontainer}>
          <TextField
          sx={{backgroundColor:'white'}}
            className={styles.search}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            placeholder="Zip"
          />
          <span>
            <Button
            sx={{backgroundColor:'white',color:'black',borderRadius:5,marginTop:1,marginLeft:1}}
            variant="contained"
              onClick={() => {
                getCurrent(zip, setCurrent);
              }}
            >
              Submit
            </Button>
          </span>
        </div>
        <CurrentWeather current={current}/>
      </body>
    </>
  );
}

export default App;
