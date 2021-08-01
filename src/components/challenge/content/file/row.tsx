import { rowStyles } from "../../style";
import { WarningRounded, InsertDriveFile } from "@material-ui/icons";
import { IExtensionType } from ".";

function Row({
  extension,
  warning,
  text,
}: {
  extension: IExtensionType;
  warning: boolean;
  text: string;
}) {
  const classes = rowStyles();
  return (
    <div className={classes.row}>
      {extension !== "default" ? (
        <div className={`${classes.extension} ${classes[extension]}`}></div>
      ) : (
        <div className={`${classes.extension} ${classes[extension]}`}>
          <InsertDriveFile />
        </div>
      )}
      {warning && (
        <div className={classes.warning}>
          <WarningRounded />
        </div>
      )}

      <div className={classes.text}>{text}</div>
    </div>
  );
}

export default Row;
