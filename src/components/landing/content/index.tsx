import { IChallenge } from "..";
import { contentStyles } from "../style";
import List from "./list";
import Option from "./option";

function Content({ quizList }: { quizList: IChallenge[] }) {
  const classes = contentStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Option />
          <List quizList={quizList} />
        </div>
      </div>
    </div>
  );
}

export default Content;
