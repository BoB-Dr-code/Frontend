import { explanationContentStyles } from "../../style";

function Content() {
  const classes = explanationContentStyles();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.title}>취약성 범주</div>
      <div className={classes.content}>삽입 결함 - SQL 삽입</div>
      <div className={classes.title}>답변 제출</div>
      <div className={classes.content}>
        There is 1 vulnerable block in the source code that you need to locate.
      </div>
      <div className={classes.description}>
        <span className={classes.selected}>0</span>코드 블록을 선택했습니다.
      </div>
    </div>
  );
}

export default Content;
