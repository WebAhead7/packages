import React from "react";
import { Button, TextField, Slider, Typography } from "@material-ui/core";
import styles from "./styles";

const Home = (props) => {
  const valuetext = (value) => {
    return `${value}°C`;
  };
  return (
    <div>
      <Button variant="contained" color="secondary">
        Alaa
      </Button>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <div style={styles.slideContainer}>
        <Typography id="discrete-slider" gutterBottom>
          Temperature
        </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </div>
    </div>
  );
};

export default Home;
