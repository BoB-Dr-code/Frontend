import { useEffect, useState } from "react";
import { listStyles } from "../../style";
import Card from "./card";
import Search from "./search";

export interface IChallenge {
  title: string;
  category: string;
  participant: number;
  finished: number;
  gpa: number;
  good: number;
  bad: number;
}

function List() {
  const classes = listStyles();
  const [challengeList, setChallengeList] = useState<IChallenge[]>([]);

  useEffect(() => {
    setChallengeList([
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
      {
        title: "test title",
        category: "test category",
        finished: 1000,
        participant: 2000,
        gpa: 3.86,
        good: 123,
        bad: 42,
      },
    ]);
  }, []);

  return (
    <div className={classes.list}>
      <div className={classes.searchWrapper}>
        <div className={classes.title}>시큐어코딩 문제</div>
        <Search />
      </div>
      <div className={classes.cardLayout}>
        {challengeList.map((v, i) => (
          <Card {...v} key={`card-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default List;
