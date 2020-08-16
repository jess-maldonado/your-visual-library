import React from "react";
import { Pane, Heading, Text } from "evergreen-ui";
import { useSelector } from "react-redux";

const LongestBook = (props) => {
  let data = useSelector((state) => state.fullData);
  if (data.length > 0) {
    data.sort((a, b) =>
      Number(a.NumberofPages) < Number(b.NumberofPages) ? 1 : -1
    );
    console.log(data);
  }

  return (
    <Pane>
      <Heading size={300}>The longest book you read was XYZ</Heading>
    </Pane>
  );
};

export default LongestBook;
