import { footerStyles } from "../style";

function Footer() {
  const classes = footerStyles();
  return (
    <div className={classes.footer}>
      <span className={classes.license}>Licenses</span>
      <span className={classes.text}>© BoB DR Code 2021</span>
    </div>
  );
}

export default Footer;
