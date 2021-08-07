import { useEffect, useState } from "react";
import { IChallenge } from "../..";
import { listStyles } from "../../style";
import Card from "./card";
import Search from "./search";

function List({ quizList }: { quizList: IChallenge[] }) {
  const classes = listStyles();

  return (
    <div className={classes.list}>
      <div className={classes.searchWrapper}>
        <div className={classes.title}>시큐어코딩 문제</div>
        <Search />
      </div>
      <div className={classes.cardLayout}>
        {quizList.map((v, i) => (
          <Card {...v} key={`card-${i}`} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default List;
