import { WarningRounded } from "@material-ui/icons";
import { lineStyles } from "../../style";

function Line({
  text,
  warning,
  line,
}: {
  text: string;
  warning: boolean;
  line: number;
}) {
  const classes = lineStyles();
  return (
    <div className={classes.lineWrapper}>
      <div
        className={classes.warning}
        onClick={() => {
          if (warning) {
            document
              .getElementById(`line-${line}`)
              ?.classList.toggle(classes.selected);
          }
        }}
      >
        {warning && <WarningRounded />}
      </div>
      <div className={classes.line}>{line}</div>
      <div className={classes.code}>
        <div
          id={`line-${line}`}
          className={warning ? classes.highlighting : ""}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Line;
