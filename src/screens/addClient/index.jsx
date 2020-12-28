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
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "./styles";

const Addclient = () => {
  const styles = useStyles();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    building: "",
    apartment: "",
    post: "",
  });

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <Container>
      <div>
        <p className={styles.header}>Add New Client</p>

        <form>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="fname">First Name</InputLabel>
            <Input
              label="fname"
              id="fname"
              onChange={(e) => handlerInputs(e, "fname")}
              value={values.fname}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="lname">Last Name</InputLabel>
            <Input
              label="lname"
              id="lname"
              onChange={(e) => handlerInputs(e, "lname")}
              value={values.lname}
            />
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="city">City</InputLabel>
                <Input
                  type="text"
                  label="city"
                  id="city"
                  onChange={(e) => handlerInputs(e, "city")}
                  value={values.city}
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="street">Street</InputLabel>
                <Input
                  type="text"
                  label="street"
                  id="street"
                  onChange={(e) => handlerInputs(e, "street")}
                  value={values.street}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="address">Building</InputLabel>
                <Input
                  type="text"
                  label="building"
                  id="building"
                  onChange={(e) => handlerInputs(e, "building")}
                  value={values.building}
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={styles.input_top}>
                <InputLabel htmlFor="apartment">Apartment</InputLabel>
                <Input
                  type="text"
                  label="apartment"
                  id="apartment"
                  onChange={(e) => handlerInputs(e, "apartment")}
                  value={values.apartment}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              label="Email"
              id="email"
              onChange={(e) => handlerInputs(e, "email")}
              value={values.email}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="post">PO Box</InputLabel>
            <Input
              id="post"
              type="text"
              value={values.post}
              onChange={(e) => handlerInputs(e, "post")}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => console.log(values)}
        >
          Finish
        </Button>
      </div>
    </Container>
  );
};

export default Addclient;
