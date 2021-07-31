import React from "react";
import { rowStyles } from "../../style";

function Row() {
  const classes = rowStyles();
  return <div className={classes.row}></div>;
}

export default Row;
