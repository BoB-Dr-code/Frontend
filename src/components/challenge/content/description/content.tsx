import { explanationContentStyles } from "../../style";

function Content() {
  const classes = explanationContentStyles();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.title}></div>
      <div className={classes.content}></div>
      <div className={classes.title}></div>
      <div className={classes.description}></div>
      <div className={classes.content}>
        <span className={classes.selected}></span>
      </div>
    </div>
  );
}

export default Content;
