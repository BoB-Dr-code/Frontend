import { useState } from "react";
import { IWarningCheck } from "..";
import { descriptionStyles } from "../../style";
import ButtonLayout from "./buttonLayout";
import Content from "./content";

import Explanation from "./explanation";
import Progress from "./progress";

function Description({
  selectedCheck,
  category,
  description,
  hintList,
  step,
  checkCorrect,
  selectedVuln,
  setRadio,
  selectedRadio,
  setStep,
}: {
  selectedCheck: IWarningCheck;
  category: string;
  description: string;
  hintList: {
    title: string;
    description: string;
  }[];
  step: number;
  checkCorrect: () => void;
  selectedVuln?: string[];
  setRadio: (index: number) => void;
  selectedRadio?: IWarningCheck;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const classes = descriptionStyles();

  return (
    <div className={classes.description}>
      <Progress step={step} />
      <div className={classes.contentLayout}>
        <Explanation step={step} />
        <Content
          count={Object.values(selectedCheck).reduce((a, c) => a + c, 0)}
          category={category}
          description={description}
          step={step}
          selectedVuln={selectedVuln}
          selectedCheck={selectedCheck}
          setRadio={setRadio}
          selectedRadio={selectedRadio}
        />
        <ButtonLayout
          hintList={hintList}
          step={step}
          checkCorrect={checkCorrect}
          setStep={setStep}
        />
      </div>
    </div>
  );
}

export default Description;
