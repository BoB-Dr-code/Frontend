import { optionStyles } from "../../style";
import Category from "./category";
import Filter from "./filter";

function Option() {
  const classes = optionStyles();
  return (
    <div className={classes.option}>
      <Category />
      <Filter />
    </div>
  );
}

export default Option;
