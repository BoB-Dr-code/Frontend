import { contentStyles } from "../style";
import Description from "./description";
import File from "./file";
import Code from "./code";
import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export interface IWarningCheck {
  [key: number]: boolean;
}

export interface IQuizDetail {
  category: string;
  description: string;
  codeList: {
    fileName: string;
    content: {
      text: string;
      group: number;
    }[];
    warningGroup: number[];
  }[];
  hintList: {
    title: string;
    description: string;
  }[];
}

function Content({ id }: { id: string }) {
  const classes = contentStyles();
  const history = useHistory();
  const [quizDetail, setQuizDetail] = useState<IQuizDetail | undefined>(
    undefined
  );
  const [selectedCheck, setSelectedCheck] = useState<IWarningCheck>({});
  const [fileIndex, setFileIndex] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [selectedVuln, setSelectedVuln] = useState<string[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<IWarningCheck>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function setSelectGroup(group: number) {
    setSelectedCheck({ ...selectedCheck, [group]: !selectedCheck[group] });
  }

  function setRadio(index: number) {
    const temp = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    };

    setSelectedRadio({ ...temp, [index]: true });
  }

  useEffect(() => {
    fetch(`http://localhost:90/quiz/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setQuizDetail(res.result);
      });
  }, []);

  const Step1 = () => {
    const checkCorrect = () => {
      const answerList = [];

      for (const key in selectedCheck) {
        if (selectedCheck[key] === true) answerList.push(key);
      }

      fetch(`http://localhost:90/quiz/answer1/${id}?answer=[${answerList}]`)
        .then((res) => res.json())
        .then((res) => {
          if (res.error !== undefined) {
            throw "fetch error";
          }

          if (res.result.correct === true) {
            Swal.fire({
              icon: "success",
              title: "정답입니다!",
              text: "다음 단계로 넘어갑니다",
              heightAuto: false,
            }).then(() => {
              setSelectedVuln(res.result.choices);
              setStep(2);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "틀렸습니다...",
              text: "블럭을 다시 선택해주세요!",
              heightAuto: false,
            });
          }
        });
    };

    return (
      <div className={classes.content}>
        <Description
          selectedCheck={selectedCheck}
          category={quizDetail?.category ?? ""}
          description={quizDetail?.description ?? ""}
          hintList={quizDetail?.hintList ?? []}
          step={step}
          checkCorrect={checkCorrect}
          setRadio={setRadio}
          setStep={setStep}
        />
        <div className={classes.codeWrapper}>
          <File
            fileList={quizDetail?.codeList ?? []}
            setFileIndex={setFileIndex}
          />
          <Code
            codeList={quizDetail?.codeList[fileIndex].content ?? []}
            warningGroup={quizDetail?.codeList[fileIndex].warningGroup ?? []}
            selectedCheck={selectedCheck}
            setSelectGroup={setSelectGroup}
            step={step}
          />
        </div>
      </div>
    );
  };

  const Step2 = () => {
    const checkCorrect = () => {
      const answer = (() => {
        for (const key in selectedRadio) {
          if (selectedRadio[key] === true) {
            return key;
          }
        }
        return 0;
      })();

      fetch(`http://localhost:90/quiz/answer2/${id}?answer=${answer}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.result.correct === true) {
            Swal.fire({
              icon: "success",
              title: "정답입니다!",
              text: "다음 단계로 넘어갑니다",
              heightAuto: false,
            }).then(() => {
              setSelectedRadio({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
              });
              setSelectedVuln(res.result.choices);
              setStep(3);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "틀렸습니다...",
              text: "다시 선택해주세요!",
              heightAuto: false,
            });
          }
        });
    };

    return (
      <div className={classes.content}>
        <Description
          selectedCheck={selectedCheck}
          category={quizDetail?.category ?? ""}
          description={quizDetail?.description ?? ""}
          hintList={quizDetail?.hintList ?? []}
          step={step}
          checkCorrect={checkCorrect}
          selectedVuln={selectedVuln}
          setRadio={setRadio}
          selectedRadio={selectedRadio}
          setStep={setStep}
        />
        <div className={classes.codeWrapper}>
          <File
            fileList={quizDetail?.codeList ?? []}
            setFileIndex={setFileIndex}
          />
          <Code
            codeList={quizDetail?.codeList[fileIndex].content ?? []}
            warningGroup={quizDetail?.codeList[fileIndex].warningGroup ?? []}
            selectedCheck={selectedCheck}
            setSelectGroup={setSelectGroup}
            step={step}
          />
        </div>
      </div>
    );
  };

  const Step3 = () => {
    const checkCorrect = () => {
      const answer = (() => {
        for (const key in selectedRadio) {
          if (selectedRadio[key] === true) {
            return key;
          }
        }
        return 0;
      })();

      fetch(`http://localhost:90/quiz/answer3/${id}?answer=${answer}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.result.correct === true) {
            Swal.fire({
              icon: "success",
              title: "정답입니다!",
              text: "챌린지에 성공하셨습니다!!",
              heightAuto: false,
            }).then(() => {
              setSelectedVuln([res.result.description]);
              setStep(4);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "틀렸습니다...",
              text: "다시 선택해주세요!",
              heightAuto: false,
            });
          }
        });
    };

    return (
      <div className={classes.content}>
        <Description
          selectedCheck={selectedCheck}
          category={quizDetail?.category ?? ""}
          description={quizDetail?.description ?? ""}
          hintList={quizDetail?.hintList ?? []}
          step={step}
          checkCorrect={checkCorrect}
          selectedVuln={selectedVuln}
          setRadio={setRadio}
          selectedRadio={selectedRadio}
          setStep={setStep}
        />
        <div className={classes.codeWrapper}>
          <File
            fileList={quizDetail?.codeList ?? []}
            setFileIndex={setFileIndex}
          />
          <Code
            codeList={quizDetail?.codeList[fileIndex].content ?? []}
            warningGroup={quizDetail?.codeList[fileIndex].warningGroup ?? []}
            selectedCheck={selectedCheck}
            setSelectGroup={setSelectGroup}
            step={step}
          />
        </div>
      </div>
    );
  };

  const Commentary = () => {
    const checkCorrect = () => {
      // Swal.fire({
      //   icon: "success",
      //   title: "감사합니다!",
      //   text: "문제를 평가해주세요",
      //   heightAuto: false,
      // });
      history.push("/");
    };

    return (
      <div className={classes.content}>
        <Description
          selectedCheck={selectedCheck}
          category={quizDetail?.category ?? ""}
          description={quizDetail?.description ?? ""}
          hintList={quizDetail?.hintList ?? []}
          step={step}
          checkCorrect={checkCorrect}
          selectedVuln={selectedVuln}
          setRadio={setRadio}
          selectedRadio={selectedRadio}
          setStep={setStep}
        />
        <div className={classes.codeWrapper}>
          <File
            fileList={quizDetail?.codeList ?? []}
            setFileIndex={setFileIndex}
          />
          <Code
            codeList={quizDetail?.codeList[fileIndex].content ?? []}
            warningGroup={quizDetail?.codeList[fileIndex].warningGroup ?? []}
            selectedCheck={selectedCheck}
            setSelectGroup={setSelectGroup}
            step={step}
          />
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Commentary />}
    </React.Fragment>
  );
}

export default Content;
