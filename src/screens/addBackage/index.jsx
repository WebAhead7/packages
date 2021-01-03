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
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles";

const AddPackage = () => {
  const styles = useStyles();
  const [values, setValues] = useState({
    name: "",
    id: "",
    weight: "",
    price: "",
    quantity: "",
    location: "",
    client: "",
  });
  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <Container>
      <div>
        <p className={styles.header}>Add Package</p>
        <form>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="name">Package Name</InputLabel>
            <Input
              label="name"
              id="name"
              onChange={(e) => handlerInputs(e, "name")}
              value={values.name}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="name">Package ID</InputLabel>
            <Input
              label="id"
              id="id"
              onChange={(e) => handlerInputs(e, "id")}
              value={values.id}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="weight">Weight</InputLabel>
            <Input
              label="weight"
              id="weight"
              onChange={(e) => handlerInputs(e, "weight")}
              value={values.weight}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="price">Delivery Price</InputLabel>
            <Input
              label="price"
              id="price"
              onChange={(e) => handlerInputs(e, "price")}
              value={values.price}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input
              label="quantity"
              id="quantity"
              type="number"
              onChange={(e) => handlerInputs(e, "quantity")}
              value={values.quantity}
            />
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          className={styles.add_button}
        >
          Choose Client
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          className={styles.add_button}
        >
          Add Client
        </Button>
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

export default AddPackage;
