import React from "react";
import { Pane, Heading, withTheme } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import Charts from "./Charts";
import Header from "../components/Header";
import Years from "../components/Years";
import { ResponsiveBar } from "@nivo/bar";

const Layout = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="tint2"
      height="100vh"
    >
      <Header />
      <Years years={["All", "2020", "2019", "2018"]} />
      <Charts justifySelf="center">
        <ResponsiveBar
          data={[
            { author: "JK Rowling", books: 10 },
            { author: "Jim Butcher", books: 28 },
          ]}
          indexBy="author"
          keys={["books"]}
          margin={{ left: 80 }}
          height={300}
          layout="horizontal"
          borderRadius={10}
          borderWidth={2}
          enableGridX={false}
          enableGridY={false}
          axisLeft={{
            legendOffset: -40,
            tickSize: 0,
          }}
        />
      </Charts>
    </Pane>
  );
};

export default withTheme(Layout);
