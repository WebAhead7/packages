import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import Home from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import Profile from "../../screens/Package";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function RouterTab() {
  const styles = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={styles.root}
      component={Router}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Home />}
        component={Link}
        to="/"
      />

      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        component={Link}
        to="/favorite"
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
        component={Link}
        to="/profile"
      />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        to="/profile"
        icon={<PersonIcon />}
        component={Link}
        to="/profile"
      />
    </BottomNavigation>
  );
}
