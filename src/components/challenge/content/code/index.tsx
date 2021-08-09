import { IWarningCheck } from "..";
import { codeStyles } from "../../style";
import Line from "./line";
import { Done } from "@material-ui/icons";

function Code({
  codeList,
  warningGroup,
  selectedCheck,
  setSelectGroup,
  step,
}: {
  codeList: {
    text: string;
    group: number;
  }[];
  warningGroup: number[];
  selectedCheck: IWarningCheck;
  setSelectGroup: (group: number) => void;
  step: number;
}) {
  const classes = codeStyles();

  return (
    <div className={classes.code}>
      {step !== 1 && (
        <div
          style={{
            width: "calc(100% - 1226px)",
            height: "calc(100% - 146px)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              opacity: 0.15,
              backgroundColor: "#ffffff",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <Done
            style={{
              width: "200px",
              height: "200px",
              color: "#62C462",
              position: "absolute",
            }}
          />
        </div>
      )}
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
