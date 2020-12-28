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
import Grid from "@material-ui/core/Grid";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./styles";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const AddBusiness = () => {
  const categories = [
    {
      value: "food",
      label: "Food",
    },
    {
      value: "sport",
      label: "Sport",
    },
  ];

  const styles = useStyles();
  const [values, setValues] = useState({
    sname: "",
    category: "",
    hours: "",
    email: "",
    phone: "",
    fax: "",
    location: "",
    about: "",
  });
  //   const [selectedDate, setSelectedDate] = useState({ sun1: new Date('2014-08-18T21:11:54'), sun2: new Date('2014-08-18T21:11:54'), mon1 : new Date('2014-08-18T21:11:54'), mon2: new Date('2014-08-18T21:11:54'), tue1 : new Date('2014-08-18T21:11:54'), tue2 : new Date('2014-08-18T21:11:54'), wed1 : new Date('2014-08-18T21:11:54'),wed2 : new Date('2014-08-18T21:11:54'), thu1 : new Date('2014-08-18T21:11:54'), thu2 : new Date('2014-08-18T21:11:54'), fri1 :new Date('2014-08-18T21:11:54'), fri2 : new Date('2014-08-18T21:11:54'), sat1 : new Date('2014-08-18T21:11:54'), sat2: new Date('2014-08-18T21:11:54')

  // });

  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const [dates, setDate] = useState({
    Sunday: new Date("2014-08-18T21:11:54"),
    Monday: new Date("2014-08-18T21:11:54"),
    Tuesday: Date("2014-08-18T21:11:54"),
    Wednesday: new Date("2014-08-18T21:11:54"),
    Thursday: new Date("2014-08-18T21:11:54"),
    Friday: new Date("2014-08-18T21:11:54"),
    Saturday: new Date("2014-08-18T21:11:54"),
    Sunday1: new Date("2014-08-18T21:11:54"),
    Monday1: new Date("2014-08-18T21:11:54"),
    Tuesday1: new Date("2014-08-18T21:11:54"),
    Wednesday1: new Date("2014-08-18T21:11:54"),
    Thursday1: new Date("2014-08-18T21:11:54"),
    Friday1: new Date("2014-08-18T21:11:54"),
    Saturday1: new Date("2014-08-18T21:11:54"),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlerInputs = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <Container>
      <div>
        <p className={styles.header}>Add Your Business</p>

        <form>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="sname">Shop Name</InputLabel>
            <Input
              label="sname"
              id="sname"
              onChange={(e) => handlerInputs(e, "sname")}
              value={values.sname}
            />
          </FormControl>

          <TextField
            className={styles.input_top}
            id="category"
            select
            label="Category"
            value={values.category}
            onChange={(e) => handlerInputs(e, "category")}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your category"
          >
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <p className={styles.title}>Working Days</p>

          {days.map((day, index) => (
            <FormControl className={styles.input_top} key={index}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <p>{day}</p>
                  </Grid>
                  <Grid item xs>
                    <KeyboardTimePicker
                      margin="normal"
                      id={day}
                      label="Open Hour"
                      value={dates[day]}
                      onChange={(date) =>
                        setDate(...dates, (dates[day] = date))
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Grid>
                  <Grid item xs>
                    <KeyboardTimePicker
                      margin="normal"
                      id={`${day}1`}
                      label="Close Hour"
                      value={dates[`${day}1`]}
                      onChange={(date) =>
                        setDate(...dates, (dates[`${day}1`] = date))
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
            </FormControl>
          ))}

          {/* <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Sunday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="sun1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="sun2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Monday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="mon1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="mon2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Tuesday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="tus1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="tus2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Wednesday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="wed1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="wed2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Thursday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="thu1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="thu2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Friday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="fri1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="fri2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={styles.input_top}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <p>Saturday</p>
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="sat1"
                    label="Open Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <KeyboardTimePicker
                    margin="normal"
                    id="sat2"
                    label="Close Hour"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </FormControl> */}

          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              label="phone"
              id="phone"
              onChange={(e) => handlerInputs(e, "phone")}
              value={values.phone}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="fax">Fax</InputLabel>
            <Input
              label="fax"
              id="fax"
              onChange={(e) => handlerInputs(e, "fax")}
              value={values.fax}
            />
          </FormControl>
          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              label="email"
              id="email"
              onChange={(e) => handlerInputs(e, "email")}
              value={values.email}
            />
          </FormControl>

          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Input
              label="location"
              id="location"
              onChange={(e) => handlerInputs(e, "location")}
              value={values.location}
            />
          </FormControl>

          <FormControl className={styles.input_top}>
            <InputLabel htmlFor="about">About your Shop</InputLabel>
            <Input
              label="about"
              id="about"
              onChange={(e) => handlerInputs(e, "about")}
              value={values.about}
            />
          </FormControl>
        </form>

        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => console.log(values, selectedDate)}
        >
          Finish
        </Button>
      </div>
    </Container>
  );
};

export default AddBusiness;
