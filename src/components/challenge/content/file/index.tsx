import { useEffect, useState } from "react";
import { fileStyles } from "../../style";
import Row from "./row";

export type IExtensionType =
  | "default"
  | "java"
  | "c"
  | "cpp"
  | "cs"
  | "javascript"
  | "python";

function File({
  fileList,
  setFileIndex,
}: {
  fileList: {
    fileName: string;
    content: {
      text: string;
      group: number;
    }[];
    warningGroup: number[];
  }[];
  setFileIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const classes = fileStyles();

  function checkWarning() {}

  return (
    <div className={classes.file}>
      {fileList.map((v, i) => (
        <Row
          text={v.fileName}
          warning={v.warningGroup.length > 0}
          key={`file-${i}`}
          index={i}
          setFileIndex={setFileIndex}
        />
      ))}
    </div>
  );
}

export default File;
