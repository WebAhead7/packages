import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import PackageItem from "../PackageItem";
import AddPackageButton from "../AddPackageButton";
const data = [
  { addedAt: "10 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "13 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "28 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "28 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "28 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "28 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "28 mins ago", status: "Pending", agent: "Pending" },
  { addedAt: "35 mins ago", status: "On transit", agent: "Mario" },
];

const PackageList = () => {
  const styles = useStyles();

  return (
    <div style={{ position: "relative" }}>
      {data.map((item, index) => (
        <PackageItem key={index} data={item} />
      ))}
    </div>
  );
};

export default PackageList;
