import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo";

const Package = (props) => {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
