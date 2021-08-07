import { contentStyles } from "../style";

import Description from "./description";
import File from "./file";
import Code from "./code";
import { useState } from "react";
import { useEffect } from "react";

export interface IWarningCheck {
  [key: number]: boolean;
}

export interface IQuizDetail {
  category: string;
  description: string;
  codeList: {
    text: string;
    group: number;
  }[];
  warningGroup: number[];
  hintList: {
    title: string;
    description: string;
  }[];
}

function Content({ id }: { id: string }) {
  const classes = contentStyles();
  const [quizDetail, setQuizDetail] = useState<IQuizDetail | undefined>(
    undefined
  );
  const [selectedCheck, setSelectedCheck] = useState<IWarningCheck>({});

  useEffect(() => {
    if (quizDetail === undefined) return;

    const groupList: IWarningCheck = quizDetail.warningGroup.reduce(
      (a: IWarningCheck, c: number) => {
        return { ...a, [c]: false };
      },
      {}
    );

    setSelectedCheck(groupList);
  }, [quizDetail?.warningGroup]);

  function setSelectGroup(group: number) {
    setSelectedCheck({ ...selectedCheck, [group]: !selectedCheck[group] });
  }

  useEffect(() => {
    fetch(`http://localhost:90/quiz/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setQuizDetail(res.result);
      });
  }, []);

  return (
    <div className={classes.content}>
      <Description
        selectedCheck={selectedCheck}
        category={quizDetail?.category ?? ""}
        description={quizDetail?.description ?? ""}
        hintList={quizDetail?.hintList ?? []}
      />
      <div className={classes.codeWrapper}>
        <File />
        <Code
          codeList={quizDetail?.codeList ?? []}
          warningGroup={quizDetail?.warningGroup ?? []}
          selectedCheck={selectedCheck}
          setSelectGroup={setSelectGroup}
        />
      </div>
    </div>
  );
}

export default Content;
