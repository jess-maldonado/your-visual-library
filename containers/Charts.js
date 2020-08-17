import React from "react";
import { Pane } from "evergreen-ui";
import AuthorBar from "../components/Charts/AuthorBar";
import Totals from "../components/Charts/Totals";
import BookStats from "../components/KPICards/BookStats";
import { useSelector } from "react-redux";
import YearLine from "../components/Charts/YearLine";

const Charts = ({ children }) => {
  const chartData = useSelector((state) => state.chartData);
  const oldestBook = chartData.get("oldestBook");
  const longestBook = chartData.get("longestBook");

  if (oldestBook) {
    return (
      <Pane width="90%" display="flex" flexDirection="column">
        <Totals
          books={chartData.get("totalBooks")}
          authors={chartData.get("totalAuthors")}
        />
        <Pane display="flex" justifyContent="space-between">
          <AuthorBar data={chartData.get("authors")} sort="uniqueBooks" />

          <Pane
            display="flex"
            flexDirection="column"
            marginLeft={20}
            marginTop={30}
            justifyContent="space-between"
            width="40%"
          >
            <BookStats
              author={longestBook.Author}
              title={longestBook.Title}
              heading={`${longestBook.NumberofPages} pages`}
              number={longestBook.NumberofPages}
              comparison="longest"
              type="pages"
            />
            <BookStats
              author={oldestBook.Author}
              title={oldestBook.Title}
              heading={`Published in ${oldestBook.OriginalPublicationYear}`}
              comparison="oldest"
            />
          </Pane>
        </Pane>
        <YearLine data={chartData.get("filteredBooks")} />
      </Pane>
    );
  }
  return <Pane></Pane>;
};

export default Charts;
