import { Redeem } from "@material-ui/icons";
import React from "react";
import { modalStyles } from "../style";

function Modal({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  hintList: string[];
  setHintList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const classes = modalStyles();
  return (
    <React.Fragment>
      <div className={`${classes.modal} ${!modal && classes.visibility}`}>
        <div className={classes.modalHeader}>
          <div className={classes.modalTitle}>
            <Redeem />
            취약성 심층 해부
          </div>
        </div>
        <div className={classes.modalBody}>
          <div className={classes.modalContent}>
            Examine code which interacts with relational databases and identify
            how each statement or query is constructed. Check if any statements
            are built by joining strings with external inputs and trace these
            data flows to see whether proper filtering or encoding was
            performed. Determine if special characters (such as single quotes)
            and keywords (such as SELECT or DROP) supplied in inputs can affect
            the statement that is constructed.
          </div>
          <div className={classes.notice}>
            죄송합니다. 이 텍스트는 현재 영어로만 제공됩니다.
          </div>
        </div>
        <div className={classes.modalFooter}>
          <div>
            <div className={classes.select}>
              <label className={classes.selectLabel} htmlFor="hint">
                이전에 제공된 힌트:
              </label>
              <select name="hint" id="hint">
                <option value="1">이 취약성은 무엇입니까?</option>
                <option value="2">취약성 심층 해부</option>
                <option value="3">옵션 줄이기...</option>
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
            <div className={classes.more}>
              <button>다음 힌트</button>
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
