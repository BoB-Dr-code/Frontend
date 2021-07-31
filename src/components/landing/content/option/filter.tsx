import { filterStyles } from "../../style";

function Filter() {
  const classes = filterStyles();
  return <div className={classes.filter}></div>;
}

export default Filter;
