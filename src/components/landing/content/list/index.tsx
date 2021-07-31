import { listStyles } from "../../style";

function List() {
  const classes = listStyles();
  return <div className={classes.list}></div>;
}

export default List;
