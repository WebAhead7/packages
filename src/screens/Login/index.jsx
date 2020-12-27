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

const Login = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  return (
    <div>
      <div style={styles.container}>
        <p style={styles.header}>Login</p>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input type="email" label="Email" id="email" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type={"password"} value={values.password} />
        </FormControl>
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: 50 }}>
        Login
      </Button>
    </div>
  );
};

export default Login;
