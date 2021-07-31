import { useState } from "react";
import { fileStyles } from "../../style";
import Row from "./row";

function File() {
  const classes = fileStyles();
  const [fileList, setFileList] = useState<string[]>([]);

  return (
    <div className={classes.file}>
      {fileList.map((v) => (
        <Row />
      ))}
    </div>
  );
}

export default File;
