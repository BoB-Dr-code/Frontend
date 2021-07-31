import { explanationStyles } from "../../style";

function Explanation() {
  const classes = explanationStyles();

  return (
    <div className={classes.explanation}>
      <div className={classes.title}></div>
      <div className={classes.content}></div>
    </div>
  );
}

export default Explanation;
