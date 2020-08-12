import React from "react";
import { Pane, Heading } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import Charts from "./Charts";
import Header from "../components/Header";

const Layout = () => {
  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <Header />
      <Charts justifySelf="center">
        <Heading size={300} color="white">
          CHARTS
        </Heading>
      </Charts>
    </Pane>
  );
};

export default Layout;
