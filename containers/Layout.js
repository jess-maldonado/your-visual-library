import React from "react";
import { Pane, Heading, withTheme } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import Charts from "./Charts";
import Header from "../components/Header";
import Years from "../components/Years";
import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";
import Head from "next/head";
import AuthorBar from "../components/Charts/AuthorBar";
import Totals from "../components/Charts/Totals";

const Layout = () => {
  const chartData = useSelector((state) => state.chartData);

  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="tint2"
      height="100vh"
    >
      <Head>
        <title>Library Stats</title>
      </Head>
      <Header />
      <Years years={["All", "2020", "2019", "2018"]} />
      <Charts justifySelf="center">
        <Totals
          books={chartData.get("totalBooks")}
          authors={chartData.get("totalAuthors")}
        />
        <AuthorBar
          data={chartData
            .get("authors")
            .sort((a, b) => (a.books < b.books ? 1 : -1))}
        />
      </Charts>
    </Pane>
  );
};

export default withTheme(Layout);
