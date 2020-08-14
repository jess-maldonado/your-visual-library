import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const AuthorBar = (props) => {
  return (
    <ResponsiveBar
      data={props.data
        .slice(0, 10)
        .sort((a, b) => (a.books > b.books ? 1 : -1))}
      indexBy="author"
      keys={["books"]}
      margin={{ left: 110 }}
      height={300}
      layout="horizontal"
      padding={0.3}
      borderRadius={5}
      borderWidth={2}
      enableGridX={false}
      enableGridY={false}
      axisLeft={{
        legendOffset: -100,
        tickSize: 0,
      }}
    />
  );
};

export default AuthorBar;
