import { IChallenge } from ".";
import { cardStyles } from "../../style";
// import {Rating} from '@material-ui/lab"

import {
  SentimentDissatisfiedRounded,
  SentimentSatisfiedRounded,
} from "@material-ui/icons/";
import { useHistory } from "react-router-dom";
function Card({
  title,
  category,
  finished,
  participant,
  gpa,
  good,
  bad,
}: IChallenge) {
  const classes = cardStyles();
  const history = useHistory();

  return (
    <div
      className={classes.card}
      onClick={() => {
        history.push(`/challenge/1`);
      }}
    >
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>
          <div className={classes.category}>{category}</div>
          <div className={classes.gpa}>{gpa}</div>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.info}>
        <div className={classes.average}>
          <div className={classes.participant}>
            <span className={classes.participantText}>참여자</span>
            <span className={classes.participantCount}>{participant}</span>
          </div>
          <div className={classes.finished}>
            <span className={classes.finishedText}>정답율</span>
            <span className={classes.finishedCount}>
              {(finished / participant) * 100}%
            </span>
          </div>
        </div>
        <div className={classes.emotion}>
          <div className={classes.good}>
            <span className={classes.goodIcon}>
              <SentimentSatisfiedRounded />
            </span>
            <span className={classes.goodCount}>{good}</span>
          </div>
          <div className={classes.bad}>
            <span className={classes.badIcon}>
              <SentimentDissatisfiedRounded />
            </span>
            <span className={classes.badCount}>{bad}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
