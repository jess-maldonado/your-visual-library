import React from "react";
import { Pane, Heading, Text, Paragraph } from "evergreen-ui";
import { useSelector } from "react-redux";

const LongestBook = (props) => {
  return (
    <Pane
      elevation={2}
      background="white"
      paddingLeft={20}
      paddingRight={10}
      paddingTop={30}
      height="47%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading size={600} paddingBottom={20} textTransform="capitalize">
        {props.comparison} Book: {props.heading}
      </Heading>
      <Paragraph size={400}>
        The {props.comparison} book you've read is
        <strong> {props.title}</strong> by {props.author}.
      </Paragraph>
    </Pane>
  );
};

export default LongestBook;
