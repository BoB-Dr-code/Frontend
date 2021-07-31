import { useEffect, useState } from "react";
import { codeStyles } from "../../style";
import Line from "./line";

function Code() {
  const classes = codeStyles();
  const [lineList, setLineList] = useState<string[]>([]);

  useEffect(() => {
    setLineList([
      "export const codeStyles = makeStyles(() =>",
      "  createStyles({",
      "    code: {},",
      "  })",
      ");",
    ]);
  }, []);

  return (
    <div className={classes.code}>
      {lineList.map((v, i) => (
        <Line text={v} line={i + 1} />
      ))}
    </div>
  );
}

export default Code;
