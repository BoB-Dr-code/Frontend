import { cardStyles } from "../../style";

function Card() {
  const classes = cardStyles();
  return <div className={classes.card}></div>;
}

export default Card;
