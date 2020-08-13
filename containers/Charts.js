import React from "react";
import { Pane } from "evergreen-ui";

const Charts = ({ children }) => {
  return (
    <Pane height={500} width="80%" display="flex" flexWrap="right-to-left">
      {children}
    </Pane>
  );
};

export default Charts;
