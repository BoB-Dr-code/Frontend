import React from "react";
import { IWarningCheck } from "..";
import { explanationContentStyles } from "../../style";

function Content({
  count,
  category,
  description,
  step,
  selectedVuln,
  selectedCheck,
  setRadio,
  selectedRadio,
}: {
  count: number;
  category: string;
  description: string;
  step: number;
  selectedVuln?: string[];
  selectedCheck?: IWarningCheck;
  setRadio: (index: number) => void;
  selectedRadio?: IWarningCheck;
}) {
  const classes = explanationContentStyles();

  return (
    <div className={classes.contentWrapper}>
      {step === 1 && (
        <React.Fragment>
          <div className={classes.title}>취약성 범주</div>
          <div className={classes.content}>{category}</div>
          <div className={classes.title}>답변 제출</div>
          <div className={classes.content}>{description}</div>
          <div className={classes.description}>
            <span className={classes.selected}>{count}</span>코드 블록을
            선택했습니다.
          </div>
        </React.Fragment>
      )}
      {step === 2 && (
        <React.Fragment>
          <div className={classes.title}>보기</div>
          <div className={classes.content} style={{ height: "fit-content" }}>
            <div>
              {selectedVuln?.map((v, i) => {
                return (
                  <div
                    onClick={() => {
                      setRadio(i + 1);
                    }}
                    key={`radio-${i}`}
                    style={{ display: "flex" }}
                  >
                    <input
                      type="radio"
                      name={`radio-${i}`}
                      id={`radio-${i}`}
                      style={{ marginRight: "4px" }}
                      checked={selectedRadio![i + 1] ?? false}
                    />
                    <label
                      htmlFor={`radio-${i}`}
                      style={{ marginRight: "24px" }}
                    >
                      {v}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.title}>답변 제출</div>
          <div className={classes.description}>
            <span className={classes.selected}>
              {[1, 2, 3, 4, 5].filter((v) => selectedRadio![v] === true)}
            </span>
            번을 선택했습니다.
          </div>
        </React.Fragment>
      )}
      {step === 3 && (
        <React.Fragment>
          <div className={classes.title}>보기</div>
          <div className={classes.content} style={{ height: "fit-content" }}>
            <div
              style={{
                display: "grid",
                gap: "18px 10px",
              }}
            >
              {selectedVuln?.map((v, i) => {
                return (
                  <div
                    onClick={() => {
                      setRadio(i + 1);
                    }}
                    key={`radio-${i}`}
                    style={{
                      display: "flex",
                      backgroundColor: "#32383E",
                      borderRadius: "4px",
                    }}
                  >
                    <input
                      type="radio"
                      name={`radio-${i}`}
                      id={`radio-${i}`}
                      style={{ marginRight: "4px" }}
                      checked={selectedRadio![i + 1] ?? false}
                    />
                    <label
                      htmlFor={`radio-${i}`}
                      style={{
                        marginRight: "24px",
                        whiteSpace: "pre",
                        marginBottom: "6px",
                      }}
                    >
                      {v.split("\\n").map((line, idx) => (
                        <div key={`text-${i}-${idx}`}>{line}</div>
                      ))}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.title}>답변 제출</div>
          <div className={classes.description}>
            <span className={classes.selected}>
              {[1, 2, 3, 4, 5].filter((v) => selectedRadio![v] === true)}
            </span>
            번을 선택했습니다.
          </div>
        </React.Fragment>
      )}
      {step === 4 && (
        <React.Fragment>
          <div className={classes.title}>문제 의도</div>
          <div className={classes.content} style={{ height: "fit-content" }}>
            {selectedVuln![0]}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Content;
