import { progressStyles } from "../../style";

function Progress({ step }: { step: number }) {
  const classes = progressStyles();

  return (
    <div className={classes.progress}>
      <div className={classes.station}>
        <div className={classes.step}></div>
        <div className={classes.text}>취약성 위치 찾기</div>
      </div>
      <div className={classes.lane}></div>
      <div className={classes.station}>
        <div className={classes.step}></div>
        <div className={classes.text}>솔루션 확인</div>
      </div>
      <div className={classes.lane}></div>
      <div className={classes.station}>
        <div className={classes.step}></div>
        <div className={classes.text}>챌린지 완료</div>
      </div>
    </div>
  );
}

export default Progress;
