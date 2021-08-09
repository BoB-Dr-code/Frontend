import { buttonLayoutStyles } from "../../style";
import { Redeem, CheckBoxOutlined, Home } from "@material-ui/icons";
import Modal from "../../modal";
import { useState } from "react";

function ButtonLayout({
  hintList,
  step,
  checkCorrect,
  setStep,
}: {
  hintList: {
    title: string;
    description: string;
  }[];
  step: number;
  checkCorrect: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const classes = buttonLayoutStyles();
  const [modal, setModal] = useState<boolean>(false);

  if (step === 4)
    return (
      <div className={classes.layout}>
        <div className={classes.button}>
          <button
            className={classes.skip}
            onClick={() => {
              setStep(step - 1);
            }}
          >
            이전으로
          </button>
        </div>
        <div className={classes.button}>
          <button
            className={classes.hint}
            onClick={() => {
              setModal(true);
            }}
          >
            <Redeem />
            힌트
          </button>
        </div>
        <div className={classes.button}>
          <button
            className={classes.next}
            onClick={() => {
              checkCorrect();
            }}
          >
            돌아가기
          </button>
        </div>
        <Modal modal={modal} setModal={setModal} hintList={hintList} />
      </div>
    );

  return (
    <div className={classes.layout}>
      <div className={classes.button}>
        <button
          className={classes.skip}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          이전으로
        </button>
      </div>
      <div className={classes.button}>
        <button
          className={classes.hint}
          onClick={() => {
            setModal(true);
          }}
        >
          <Redeem />
          힌트
        </button>
      </div>
      <div className={classes.button}>
        <button
          className={classes.next}
          onClick={() => {
            checkCorrect();
          }}
        >
          <CheckBoxOutlined />
          다음
        </button>
      </div>
      <Modal modal={modal} setModal={setModal} hintList={hintList} />
    </div>
  );
}

export default ButtonLayout;
