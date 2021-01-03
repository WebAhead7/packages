import React, { useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { getOwnerProfile } from "../../api/api";
import {
  Button,
  TextField,
  Slider,
  Typography,
  Container,
  AppBar,
} from "@material-ui/core";
import useStyles from "./styles";
import Loader from "../../components/Loader";
import PackageList from "../../components/PackageList";
import Filter from "../../components/Filter";
import AddPackageButton from "../../components/AddPackageButton";

const Home = (props) => {
  const { auth, setAuth, ownerInfo, setOwnerInfo } = useContext(globalContext);

  useEffect(() => {
    if (!ownerInfo.data) {
      getOwnerProfile(setOwnerInfo, auth.token);
    }
  }, []);

  if (ownerInfo.isLoading) return <Loader />;

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
