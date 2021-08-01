import { filterStyles } from "../../style";

function Filter() {
  const classes = filterStyles();
  return (
    <div className={classes.filter}>
      <div className={classes.title}>FILTER BY</div>
      <div className={classes.select}>
        <select name="" id="">
          <option value="난이도">난이도</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className={classes.select}>
        <select name="" id="">
          <option value="">상태별</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className={classes.select}>
        <select name="" id="">
          <option value="">언어별</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className={classes.select}>
        <select name="" id="">
          <option value="">태그별</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
