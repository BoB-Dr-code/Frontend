import { headerStyles } from "../style";
import { LocalHospital } from "@material-ui/icons/";

function Header() {
  const classes = headerStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <LocalHospital />
          <span className={classes.dr}>Dr</span>
          <span className={classes.dot}>.</span>
          <span className={classes.code}>Code</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
