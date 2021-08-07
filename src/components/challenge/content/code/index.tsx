import { useEffect, useState } from "react";
import { IWarningCheck } from "..";
import { codeStyles } from "../../style";
import Line from "./line";

function Code({
  codeList,
  warningGroup,
  selectedCheck,
  setSelectGroup,
}: {
  codeList: {
    text: string;
    group: number;
  }[];
  warningGroup: number[];
  selectedCheck: IWarningCheck;
  setSelectGroup: (group: number) => void;
}) {
  const classes = codeStyles();

  return (
    <div className={classes.code}>
      {codeList.map((v, i) => {
        return (
          <Line
            text={v.text}
            warning={warningGroup.includes(v.group)}
            line={i + 1}
            key={`line-${i}`}
            check={selectedCheck[v.group] ?? false}
            group={v.group}
            setSelectGroup={setSelectGroup}
          />
        );
      })}
    </div>
  );
}

export default Code;
