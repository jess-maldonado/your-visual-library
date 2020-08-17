import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Pane, Heading, Text } from "evergreen-ui";

const YearLine = (props) => {
  let yearData = [{ id: "year", data: [] }];
  let yearMap = new Map();

  if (props.data) {
    props.data.forEach((book) => {
      if (yearMap.get(book.yearPublished)) {
        yearMap.set(book.yearPublished, yearMap.get(book.yearPublished) + 1);
      } else {
        yearMap.set(book.yearPublished, 1);
      }
    });

    let years = Array.from(yearMap.keys());

    years.forEach((year) => {
      let obj = {
        x: Number(year),
        y: yearMap.get(year),
      };
      yearData[0].data.push(obj);
    });
  }

  yearData[0].data.sort((a, b) => (a.x > b.x ? 1 : -1));

  console.log(yearData);

  return (
    <Pane
      height={400}
      marginTop={20}
      paddingBottom={36}
      background="white"
      elevation={2}
    >
      <Heading size={600} paddingTop={20} paddingLeft={20}>
        What era do you generally read from?
      </Heading>
      <Text paddingLeft={20} size={300}>
        Book count by original publication year.
      </Text>
      <ResponsiveLine
        data={yearData}
        margin={{ top: 20, right: 60, bottom: 80, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 0,
          tickRotation: 90,
          legend: "Year",
          legendOffset: 40,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        enableGridX={false}
        pointLabelYOffset={-12}
        useMesh={true}
        tooltip={({ point }) => {
          let bookYear = [];
          props.data.forEach((book) => {
            if (Number(book.yearPublished) === point.data.x) {
              bookYear.push(book.title);
            }
          });
          bookYear.sort((a, b) => (a > b ? 1 : -1));

          return (
            <Pane background="white" padding={15} elevation={3}>
              <Heading>Published in {point.data.x}</Heading>
              <ul>
                {bookYear.map((book) => (
                  <li>
                    <Text size={300}>{book}</Text>
                  </li>
                ))}
              </ul>
            </Pane>
          );
        }}
      />
    </Pane>
  );
};

export default YearLine;
