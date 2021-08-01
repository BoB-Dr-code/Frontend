import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Header from "./header";
import Content from "./content";
import { challengeStyles } from "./style";
import Toolbar from "./toolbar";
import Footer from "./footer";

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
      <Toolbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Challenge;
