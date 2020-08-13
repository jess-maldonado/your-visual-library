import React from "react";
import { Pane, Heading, withTheme } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import Charts from "./Charts";
import Header from "../components/Header";
import Years from "../components/Years";
import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";

const Layout = () => {
  const chartData = useSelector((state) => state.chartData);

  let data =
    chartData !== "undefined"
      ? chartData.get("authors")
      : [
          { author: "JK Rowling", books: 10 },
          { author: "Jim Butcher", books: 28 },
        ];
  data.sort((a, b) => (a.books < b.books ? 1 : -1));

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
          data={data.slice(0, 10).sort((a, b) => (a.books > b.books ? 1 : -1))}
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
      </Charts>
    </Pane>
  );
};

export default withTheme(Layout);
