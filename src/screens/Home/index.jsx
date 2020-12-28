import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
  AppBar,
} from "@material-ui/core";
import useStyles from "./styles";
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import AddPackageButton from "../../components/AddPackageButton";

const Home = (props) => {
  return (
    <>
      <Container style={{ position: "relative", height: "100%" }}>
        <Filter />
        <PackageList />
        <div style={{ position: "absolute", right: 25, bottom: 25 }}>
          <AddPackageButton />
        </div>
      </Container>
    </>
  );
};

export default Home;
