import React from "react";
import { Typography, Avatar, Container } from "@material-ui/core";
import useStyles from "./styles";

import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";

const ProfileHeader = () => {
  const styles = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.header}>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="/assets/images/profile.png"
        />
        <Typography style={{ marginTop: 10 }} variant="h5">
          Owner Name
        </Typography>
        <div className={styles.controls}>
          <div className={styles.innerControls}>
            <Typography variant="caption" style={{ color: "#727272" }}>
              User since:
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#5A5A5A" }}>
              October 02, 2019
            </Typography>
          </div>
          <div>
            <EditIcon
              fontSize="large"
              style={{ marginRight: 20, color: "#11890F" }}
            />
            <AddBoxIcon fontSize="large" style={{ color: "#FF0000" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
