import { useEffect, useState } from "react";
import { codeStyles } from "../../style";
import Line from "./line";

interface ICode {
  text: string;
  warning: boolean;
}

function Code() {
  const classes = codeStyles();
  const [lineList, setLineList] = useState<ICode[]>([]);

  useEffect(() => {
    setLineList([
      { text: "export const codeStyles = makeStyles(() =>", warning: true },
      { text: "  createStyles({", warning: true },
      { text: "    code: {},", warning: false },
      { text: "  })", warning: false },
      { text: ");", warning: true },
    ]);
  }, []);

  return (
    <div className={classes.code}>
      {lineList.map((v, i) => (
        <Line text={v.text} warning={v.warning} line={i + 1} />
      ))}
    </div>
  );
}

export default Code;
