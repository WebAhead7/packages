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
  Container,
} from "@material-ui/core";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "./styles";

const Login = () => {
  const styles = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <Container>
      <div>
        <p className={styles.header}>Login</p>
        <form>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              label="Email"
              id="email"
              onChange={(e) => handlerInputs(e, "email")}
              value={values.email}
            />
          </FormControl>
          <FormControl style={{ width: "100%", marginTop: 15 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={"password"}
              value={values.password}
              onChange={(e) => handlerInputs(e, "password")}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 50, width: "100%" }}
          onClick={() => console.log(values)}
        >
          Login
        </Button>
      </div>
      <div className={styles.signup}>
        <Typography variant="caption">
          If you don’t have an account, please register.
        </Typography>
        <Button variant="outlined" color="primary" style={{ marginTop: 20 }}>
          Signup
        </Button>
      </div>
    </Container>
  );
};

export default Login;
