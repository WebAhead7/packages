import React, { useState, useContext, useEffect } from "react";
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
import { getAllPackages } from "../../api/api";

const Home = (props) => {
  const [packages, setPackages] = useState(null);
  useEffect(() => {
    getAllPackages(setPackages);
    //setData(redata);
  }, []);
  return (
    <>
      <Container style={{ position: "relative", height: "100%" }}>
        <Filter />
        <PackageList data={packages} />
        <div style={{ position: "absolute", right: 25, bottom: 25 }}>
          <AddPackageButton />
        </div>
      </Container>
    </>
  );
};

export default Home;
