import { buttonLayoutStyles } from "../../style";

function ButtonLayout() {
  const classes = buttonLayoutStyles();

  return (
    <div className={classes.layout}>
      <div className={classes.button}></div>
      <div className={classes.button}></div>
      <div className={classes.button}></div>
    </div>
  );
}

export default ButtonLayout;
