import { rowStyles } from "../../style";
import { WarningRounded, InsertDriveFile } from "@material-ui/icons";
import { IExtensionType } from ".";

function Row({
  warning,
  text,
  index,
  setFileIndex,
}: {
  warning: boolean;
  text: string;
  index: number;
  setFileIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const classes = rowStyles();
  return (
    <div
      className={classes.row}
      onClick={() => {
        setFileIndex(index);
      }}
    >
      {false ? (
        <div
          className={`${classes.extension} ${/*classes[extension]*/ ``}`}
        ></div>
      ) : (
        <div className={`${classes.extension} ${classes.default}`}>
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
