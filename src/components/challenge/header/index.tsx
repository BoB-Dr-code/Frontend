import React from "react";
import { headerStyles } from "../style";

function Header() {
  const classes = headerStyles();

  return <div className={classes.header}></div>;
}

export default Header;
