import React from "react";
import { Pane } from "evergreen-ui";

const Charts = ({ children }) => {
  return (
    <Pane height={100} width="80%" background="black">
      {children}
    </Pane>
  );
};

export default Charts;
