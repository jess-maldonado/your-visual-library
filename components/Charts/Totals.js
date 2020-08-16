import React from "react";
import { useSelector } from "react-redux";
import { Pane, Heading, Text } from "evergreen-ui";

const Totals = (props) => {
  let data = "";

  if (props.books > 0) {
    data = (
      <Heading size={400} textTransform="uppercase">
        Great job! You read
        <Text size={600}> {props.books} </Text>books by
        <Text size={600}> {props.authors}</Text> authors!
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
