import { buttonLayoutStyles } from "../../style";
import { Redeem, CheckBoxOutlined } from "@material-ui/icons";
import Modal from "../../modal";
import { useState } from "react";

function ButtonLayout() {
  const classes = buttonLayoutStyles();
  const [modal, setModal] = useState<boolean>(false);
  const [hintList, setHintList] = useState<string[]>([]);

  return (
    <div className={classes.layout}>
      <div className={classes.button}>
        <button className={classes.skip}>건너뛰기</button>
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
        <button className={classes.next}>
          <CheckBoxOutlined />
          다음
        </button>
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        hintList={hintList}
        setHintList={setHintList}
      />
    </div>
  );
}

export default ButtonLayout;
