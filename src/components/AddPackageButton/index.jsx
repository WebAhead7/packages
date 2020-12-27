import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";

import useStyles from "./styles";

const AddPackageButton = () => {
  const styles = useStyles();
  return (
    <IconButton
      className={styles.addButton}
      onClick={() => console.log("TEST")}
    >
      <Add className={styles.addIcon} />
    </IconButton>
  );
};

export default AddPackageButton;
