import { explanationContentStyles } from "../../style";

function Content({
  count,
  category,
  description,
}: {
  count: number;
  category: string;
  description: string;
}) {
  const classes = explanationContentStyles();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.title}>취약성 범주</div>
      <div className={classes.content}>{category}</div>
      <div className={classes.title}>답변 제출</div>
      <div className={classes.content}>{description}</div>
      <div className={classes.description}>
        <span className={classes.selected}>{count}</span>코드 블록을
        선택했습니다.
      </div>
    </div>
  );
}

export default Content;
