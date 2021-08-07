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

function Challenge() {
  const classes = challengeStyles();
  const { id } = useParams<IParam>();
  return (
    <div className={classes.challenge}>
      <Header />
      <Toolbar />
      <Content id={id} />
      <Footer />
    </div>
  );
}

export default Challenge;
