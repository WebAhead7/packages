import React from "react";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import AddPackageButton from "../../components/AddPackageButton";

const Home = (props) => {
  return (
    <Container>
      <Button variant="contained" color="secondary">
        Alaa
      </Button>
      <Filter />
      <PackageList />
      <AddPackageButton />
    </Container>
  );
};

export default Home;
