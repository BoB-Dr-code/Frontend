import { searchStyles } from "../../style";

function Search() {
  const classes = searchStyles();
  return <div className={classes.search}></div>;
}

export default Search;
