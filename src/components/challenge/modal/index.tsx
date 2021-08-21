import { Redeem } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";
import { modalStyles } from "../style";

function Modal({
  modal,
  setModal,
  hintList,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  hintList: {
    title: string;
    description: string;
  }[];
}) {
  const classes = modalStyles();
  const [hintIndex, setHintIndex] = useState<number>(0);

  if (hintList.length === 0) {
    return (
      <React.Fragment>
        <div className={`${classes.modal} ${!modal && classes.visibility}`}>
          <div className={classes.modalHeader}>
            <div className={classes.modalTitle}>
              <Redeem /> ---
            </div>
          </div>
          <div className={classes.modalBody}>
            <div className={classes.modalContent}>
              죄송합니다. 제공되는 힌트가 없습니다.
            </div>
          </div>
          <div className={classes.modalFooter}>
            <div>
              <div className={classes.select}>
                <label className={classes.selectLabel} htmlFor="hint">
                  이전에 제공된 힌트:
                </label>
                <select name="hint" id="hint"></select>
              </div>
            </div>
            <div className={classes.buttonWrapper}>
              <div className={classes.close}>
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes.overlay} ${!modal && classes.visibility}`}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();

            setModal(false);
          }}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className={`${classes.modal} ${!modal && classes.visibility}`}>
        <div className={classes.modalHeader}>
          <div className={classes.modalTitle}>
            <Redeem />
            {hintList[hintIndex].title}
          </div>
        </div>
        <div className={classes.modalBody}>
          <div className={classes.modalContent}>
            {hintList[hintIndex].description}
          </div>
          <div className={classes.notice}></div>
        </div>
        <div className={classes.modalFooter}>
          <div>
            <div className={classes.select}>
              <label className={classes.selectLabel} htmlFor="hint">
                이전에 제공된 힌트:
              </label>
              <select
                name="hint"
                id="hint"
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  setHintIndex(Number(event.currentTarget.value));
                }}
              >
                {hintList.map((v, i) => (
                  <option value={i} key={`option-${i}`}>
                    {v.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.buttonWrapper}>
            <div className={classes.close}>
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.overlay} ${!modal && classes.visibility}`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();

          setModal(false);
        }}
      />
    </React.Fragment>
  );
}

export default Modal;
