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

interface IFile {
  extension: IExtensionType;
  warning: boolean;
  text: string;
}

function File() {
  const classes = fileStyles();
  const [fileList, setFileList] = useState<IFile[]>([]);

  useEffect(() => {
    setFileList([
      { text: "login.aspx.cs", extension: "default", warning: true },
      { text: "login.cs", extension: "default", warning: true },
      { text: "login.test.cs", extension: "default", warning: true },
      { text: "web.config", extension: "default", warning: false },
      { text: "login.aspx", extension: "default", warning: false },
    ]);
  }, []);

  return (
    <div className={classes.file}>
      {fileList.map((v, i) => (
        <Row {...v} key={`file-${i}`} />
      ))}
    </div>
  );
}

export default File;
