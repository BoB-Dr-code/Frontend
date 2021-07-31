import { categoryStyles } from "../../style";

function Category() {
  const classes = categoryStyles();
  return <div className={classes.category}></div>;
}

export default Category;
