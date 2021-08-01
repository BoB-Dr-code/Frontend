import React from "react";
import { contentStyles } from "../style";

import Description from "./description";
import File from "./file";
import Code from "./code";

function Content() {
  const classes = contentStyles();
  return (
    <div className={classes.content}>
      <Description />
      <div className={classes.codeWrapper}>
        <File />
        <Code />
      </div>
    </div>
  );
}

export default Content;
