import { contentStyles } from "../style";

function Content() {
  const classes = contentStyles();
  return <div className={classes.content}></div>;
}

export default Content;
