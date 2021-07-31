import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Header from "./header";
import Content from "./content";
import { challengeStyles } from "./style";

interface IParam {
  id: string;
}

interface IChallenge {
  title: string;
  description: string;
}

function Challenge() {
  const classes = challengeStyles();
  const { id } = useParams<IParam>();
  return (
    <div className={classes.challenge}>
      <Header />
      <Content />
    </div>
  );
}

export default Challenge;
