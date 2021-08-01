import { categoryStyles } from "../../style";
import { NavigateNext } from "@material-ui/icons/";

function Category() {
  const classes = categoryStyles();
  return (
    <div className={classes.category}>
      <div className={classes.title}>문제 카테고리</div>
      <div
        className={classes.content}
        onClick={() => {
          document.getElementById("attack")?.classList.toggle(classes.open);
        }}
      >
        공격 기법 <NavigateNext />
      </div>
      <div id="attack" className={classes.detail}>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
      </div>
      <div
        className={classes.content}
        onClick={() => {
          document.getElementById("language")?.classList.toggle(classes.open);
        }}
      >
        언어 <NavigateNext />
      </div>
      <div id="language" className={classes.detail}>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
        <div className={classes.row}>
          <span className={classes.text}>기타</span>
          <span className={classes.count}>23</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
