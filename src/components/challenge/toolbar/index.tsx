import { toolbarStyles } from "../style";
import { NavigateBeforeOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function Toolbar() {
  const classes = toolbarStyles();
  const history = useHistory();
  return (
    <div className={classes.toolbar}>
      <div
        className={classes.navigation}
        onClick={() => {
          history.push("/");
        }}
      >
        <NavigateBeforeOutlined />
      </div>
    </div>
  );
}

export default Toolbar;
