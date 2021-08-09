import { explanationStyles } from "../../style";
import { WarningRounded } from "@material-ui/icons";
import React from "react";

function Explanation({ step }: { step: number }) {
  const classes = explanationStyles();
  const content = (() => {})();

  return (
    <div className={classes.explanation}>
      <div className={classes.title}>
        {step === 1 && "취약성 위치 찾기"}
        {step === 2 && "취약성 종류 고르기"}
        {step === 3 && "솔루션 확인"}
        {step === 4 && "챌린지 완료"}
      </div>
      {step === 1 && (
        <React.Fragment>
          <div className={classes.content}>
            코드 뷰어에서 줄 번호 옆에 있는 <WarningRounded />
            을(를) 클릭하여 아래 나열된 취약성을 유발하는 코드 블록을 찾아
            선택합니다.
          </div>
          <div className={classes.content}>
            선택 가능한 코드 블록이 포함된 파일은 <WarningRounded />로
            표시되었습니다.
          </div>
        </React.Fragment>
      )}
      {step === 2 && (
        <React.Fragment>
          <div className={classes.content}>
            선택한 블럭에 있는 취약점을 고르시오.
          </div>
        </React.Fragment>
      )}
      {step === 3 && (
        <React.Fragment>
          <div className={classes.content}>올바른 수정 코드를 고르시오.</div>
        </React.Fragment>
      )}
      {step === 4 && (
        <React.Fragment>
          <div className={classes.content}>
            축하합니다! 챌린지 도전에 성공하셨습니다.
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Explanation;
