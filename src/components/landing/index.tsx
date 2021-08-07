import { useState, useEffect } from "react";
import Content from "./content";
import Header from "./header";
import { challengeSetStyles } from "./style";

export interface IChallenge {
  title: string;
  category: string;
  attempt: number;
  correct: number;
  good: number;
  bad: number;
}

function ChallengeSet() {
  const classes = challengeSetStyles();
  const [quizList, setQuizList] = useState<IChallenge[]>([]);

  useEffect(() => {
    fetch("http://localhost:90/quiz/list")
      .then((res) => res.json())
      .then((res) => {
        setQuizList(res.result);
      });
  }, []);

  return (
    <div className={classes.challengeSet}>
      <Header />
      <Content quizList={quizList} />
    </div>
  );
}

export default ChallengeSet;
