import { useState } from "react";
import { descriptionStyles } from "../../style";
import ButtonLayout from "./buttonLayout";
import Content from "./content";

import Explanation from "./explanation";
import Progress from "./progress";

function Description() {
  const classes = descriptionStyles();
  const [step, setStep] = useState<number>(0);

  return (
    <div className={classes.description}>
      <Progress step={step} />
      <Explanation />
      <Content />
      <ButtonLayout />
    </div>
  );
}

export default Description;
