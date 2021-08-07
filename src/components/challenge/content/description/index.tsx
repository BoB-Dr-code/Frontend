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
}: {
  selectedCheck: IWarningCheck;
  category: string;
  description: string;
  hintList: {
    title: string;
    description: string;
  }[];
}) {
  const classes = descriptionStyles();
  const [step, setStep] = useState<number>(0);

  return (
    <div className={classes.description}>
      <Progress step={step} />
      <div className={classes.contentLayout}>
        <Explanation />
        <Content
          count={Object.values(selectedCheck).reduce((a, c) => a + c, 0)}
          category={category}
          description={description}
        />
        <ButtonLayout hintList={hintList} />
      </div>
    </div>
  );
}

export default Description;
