import React from "react";
import { useSelector } from "react-redux";
import { Pane, Heading } from "evergreen-ui";

const Totals = (props) => {
  let data = "";

  if (props.books > 0) {
    data = (
      <Heading>
        You read {props.books} books by {props.authors} authors!
      </Heading>
    );
  }

  return (
    <Pane display="flex" justifyContent="center" marginTop={20}>
      {data}
    </Pane>
  );
};

export default Totals;
