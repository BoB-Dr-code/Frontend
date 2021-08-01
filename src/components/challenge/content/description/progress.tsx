import { progressStyles } from "../../style";
import { Done } from "@material-ui/icons";

function Progress({ step }: { step: number }) {
  const classes = progressStyles();

  return (
    <div className={classes.progress}>
      <div className={`${classes.station} ${classes.active}`}>
        <div className={classes.step}>1</div>
        <span className={classes.text}>취약성 위치 찾기</span>
      </div>
      <div className={classes.lane} />
      <div className={classes.station}>
        <div className={classes.step}>2</div>
        <span className={classes.text}>솔루션 확인</span>
      </div>
      <div className={classes.lane} />
      <div className={classes.station}>
        <div className={classes.step}>
          <Done />
        </div>
        <span className={classes.text}>챌린지 완료</span>
      </div>
    </div>
  );
}

export default Progress;
