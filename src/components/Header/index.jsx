import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { globalContext } from "../../context/context";
import { Typography, AppBar, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useStyles from "./styles";

const Header = () => {
  // let location = useLocation().pathname;

  let history = useHistory();

  const { drawer, setDrawer } = useContext(globalContext);

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
        <Button onClick={handleDrawer}>
          <MenuIcon fontSize="large" />
        </Button>
        {/* <Button onClick={handleGoBack}>
          <ArrowBackIosIcon fontSize="large" />
        </Button> */}
      </AppBar>
    </div>
  );
};

export default Header;
