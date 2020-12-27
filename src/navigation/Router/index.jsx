import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../../screens/Home";
import Package from "../../screens/Package";
import Login from "../../screens/Login";
export const HomeRoute = "/";
export const ProfileRoute = "/profile";
export const LoginRoute = "/login";

const TabRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path={HomeRoute}>
          <Home />
        </Route>
        <Route path={ProfileRoute}>
          <Package />
        </Route>
        <Route path={LoginRoute}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default TabRouter;
