import React from "react";
import { Tab, Tablist, Pane, Heading } from "evergreen-ui";

const Years = (props) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size={300} padding={20}>
        SELECT YEAR
      </Heading>
      <Tablist>
        {props.years.map((year, index) => (
          <Tab
            key={year}
            id={year}
            size={300}
            padding={20}
            border="1px solid lightgrey"
          >
            {year}
          </Tab>
        ))}
      </Tablist>
    </Pane>
  );
};

export default Years;
