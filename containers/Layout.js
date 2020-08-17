import React from "react";
import { Pane, withTheme } from "evergreen-ui";
import Charts from "./Charts";
import Header from "../components/Header";
import Years from "../components/Years";

import Head from "next/head";

const Layout = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="tint2"
      height="100vh"
    >
      <Head>
        <title>Library Stats</title>
      </Head>
      <Header />
      {/* <Years years={["All", "2020", "2019", "2018"]} /> */}
      <Charts justifySelf="center"></Charts>
    </Pane>
  );
};

export default withTheme(Layout);
