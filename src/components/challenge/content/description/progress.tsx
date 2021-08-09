import { progressStyles } from "../../style";
import { Done } from "@material-ui/icons";

function Progress({ step }: { step: number }) {
  const classes = progressStyles();

  return (
    <div className={classes.progress}>
      <div className={`${classes.station} ${step > 0 && classes.active}`}>
        <div className={classes.step} style={{ fontSize: "13px" }}>
          1
        </div>
        <span className={classes.text}>취약성 위치 찾기</span>
      </div>
      <div className={`${classes.lane} ${step > 1 && classes.laneActive}`} />
      <div className={`${classes.station} ${step > 1 && classes.active}`}>
        <div className={classes.step} style={{ fontSize: "13px" }}>
          2
        </div>
        <span className={classes.text}>취약점 종류 고르기</span>
      </div>
      <div className={`${classes.lane} ${step > 2 && classes.laneActive}`} />
      <div className={`${classes.station} ${step > 2 && classes.active}`}>
        <div className={classes.step} style={{ fontSize: "13px" }}>
          3
        </div>
        <span className={classes.text}>솔루션 확인</span>
      </div>
      <div className={`${classes.lane} ${step > 3 && classes.laneActive}`} />
      <div className={`${classes.station} ${step > 3 && classes.active}`}>
        <div className={classes.step}>
          <Done />
        </div>
        <span className={classes.text}>챌린지 완료</span>
      </div>
    </div>
  );
}

export default Progress;
