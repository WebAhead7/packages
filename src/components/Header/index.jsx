import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { globalContext } from "../../context/context";
import { Typography, AppBar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useStyles from "./styles";

import {
  HomeRoute,
  PackageRoute,
  LoginRoute,
  ProfileRoute,
  RegisterRoute,
  AddPackageRoute,
  AddBusinessRoute,
} from "../../navigation/Router";

const Header = (props) => {
  const location = useLocation();
  const routes = [
    // HomeRoute,
    PackageRoute,
    LoginRoute,
    ProfileRoute,
    RegisterRoute,
    AddPackageRoute,
    AddBusinessRoute,
  ];

  const isBack = (r) => routes.some((route) => route == r);

  let history = useHistory();

  const { drawer, setDrawer, auth } = useContext(globalContext);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleGoBack = () => history.goBack();
  const styles = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        style={{ width: "100%", display: "flex", alignItems: "flex-end" }}
      >
        {auth.isAuth ? (
          <Button onClick={handleDrawer}>
            <MenuIcon fontSize="large" />
          </Button>
        ) : null}
        {!auth.isAuth && isBack(location.pathname) && (
          <Button onClick={handleGoBack}>
            <ArrowBackIosIcon fontSize="large" />
          </Button>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
