import React, { useState } from "react";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@material-ui/core";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import styles from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <p style={styles.header}>Sign up</p>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            label="Email"
            id="email"
            onChange={(e) => handlerInputs(e, "email")}
            value={values.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={"password"}
            value={values.password}
            onChange={(e) => handlerInputs(e, "password")}
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 50 }}
        onClick={() => console.log(values)}
      >
        Login
      </Button>
    </div>
  );
};

export default Signup;
