import { WarningRounded } from "@material-ui/icons";
import { lineStyles } from "../../style";

function Line({
  text,
  warning,
  line,
  check,
  group,
  setSelectGroup,
}: {
  text: string;
  warning: boolean;
  line: number;
  check: boolean;
  group: number;
  setSelectGroup: (group: number) => void;
}) {
  const classes = lineStyles();
  return (
    <div className={classes.lineWrapper}>
      <div
        style={{ pointerEvents: warning ? "auto" : "none" }}
        className={classes.warning}
        onClick={() => {
          setSelectGroup(group);
        }}
      >
        {warning && <WarningRounded />}
      </div>
      <div className={classes.line}>{line}</div>
      <div className={classes.code}>
        <div
          className={`${warning ? classes.highlighting : ""} ${
            check && classes.selected
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Line;
