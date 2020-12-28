import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";

import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";

const ProfileInfo = () => {
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Name
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
        Lastname
      </Typography>
      <Typography variant="caption" style={{ color: "#727272" }}>
        Address
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
        October 02, 2019
      </Typography>
    </div>
  );
};

export default ProfileInfo;
