import React from "react";
import { useHistory } from "react-router-dom";
import Content from "./content";
import Header from "./header";
import { challengeSetStyles } from "./style";

function ChallengeSet() {
  const classes = challengeSetStyles();
  const history = useHistory();

  return (
    <div className={classes.challengeSet}>
      <Header />
      <Content />
    </div>
  );
}

export default ChallengeSet;
