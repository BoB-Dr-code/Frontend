import React from "react";
import { lineStyles } from "../../style";

function Line({ text, line }: { text: string; line: number }) {
  const classes = lineStyles();
  return (
    <div className={classes.lineWrapper}>
      <div className={classes.warning}></div>
      <div className={classes.line}>{line}</div>
      <div className={classes.code}>{text}</div>
    </div>
  );
}

export default Line;
