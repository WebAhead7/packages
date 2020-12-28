import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { globalContext } from "../../context/context";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../screens/Home";
import Package from "../../screens/Package";
import Login from "../../screens/Login";
import Profile from "../../screens/Profile";

export const HomeRoute = "/";
export const PackageRoute = "/package";
export const LoginRoute = "/login";
export const ProfileRoute = "/profile";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerNav() {
  const styles = useStyles();
  const [state, setState] = React.useState(false);
  const { drawer, setDrawer } = useContext(globalContext);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <Router>
        <React.Fragment>
          <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
            <List>
              <Link
                to={HomeRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link
                to={PackageRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Package"} />
                </ListItem>
              </Link>
              <Link
                to={LoginRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItem>
              </Link>
              <Link
                to={ProfileRoute}
                className={styles.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItem button onClick={toggleDrawer}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Profile"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>

          <Switch>
            <Route exact path={HomeRoute}>
              <Home />
            </Route>
            <Route path={PackageRoute}>
              <Package />
            </Route>
            <Route path={LoginRoute}>
              <Login />
            </Route>
            <Route path={ProfileRoute}>
              <Profile />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}
