import { explanationStyles } from "../../style";
import { WarningRounded } from "@material-ui/icons";

function Explanation() {
  const classes = explanationStyles();

  return (
    <div className={classes.explanation}>
      <div className={classes.title}>취약성 위치 찾기</div>
      <div className={classes.content}>
        코드 뷰어에서 줄 번호 옆에 있는 <WarningRounded />
        을(를) 클릭하여 아래 나열된 취약성을 유발하는 코드 블록을 찾아
        선택합니다.
      </div>
      <div className={classes.content}>
        선택 가능한 코드 블록이 포함된 파일은 <WarningRounded />로
        표시되었습니다.
      </div>
    </div>
  );
}

export default Explanation;
