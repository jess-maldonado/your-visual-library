import React from "react";
import Link from "next/link";
import {
  FilePicker,
  Pane,
  Button,
  HelpIcon,
  Popover,
  Heading,
  Paragraph,
} from "evergreen-ui";
import { Link as EvergreenLink } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { useRouter } from "next/router";

const csv = require("csvtojson");

const FileSelect = (props) => {
  const dispatch = useDispatch();
  const fullData = useSelector((state) => state.fullData);

  const router = useRouter();
  console.log(router.pathname);
  let info;
  if (router.pathname === "/charts") {
    info = (
      <Popover
        content={
          <Pane padding={20} width={400}>
            <Heading size={400}>Something wrong?</Heading>
            <Paragraph>
              This app is a work in progress! If you upload your data and things
              don't look right, I'd love to figure out how to fix it. Please
              review the info below before submitting any issues.
            </Paragraph>
            <Paragraph paddingTop={15}>
              Ultimately, I can only visualize what is in the data, and the
              Goodreads export doesn't have a complete record of every single
              read-through of a book. We only get the total read count and the
              date of the last read, so if you've read a book 5 times, it will
              only show up on a timeline with the last date read (but it will
              count as 5 total reads).
            </Paragraph>
            <Paragraph paddingTop={15}>
              Most other issues will be related to formatting issues in the raw
              data and how it's parsed. If you want to submit an issue, please
              include your Goodreads export file, a screenshot of the incorrect
              visual, and what you would expect to see.
            </Paragraph>
            <Paragraph paddingTop={15}>
              Have other ideas or feedback? I'd love to hear from you!{"  "}
              <EvergreenLink
                href="https://forms.gle/odbvrLtmnpC2DEUQ8"
                target="#"
              >
                Provide feedback or report a bug.
              </EvergreenLink>
            </Paragraph>
            <Paragraph paddingTop={15}>
              If you're a developer, you can check out the source code in my{" "}
              <EvergreenLink
                href="https://github.com/jmaldonadorv/library-ui"
                target="#"
              >
                {" "}
                Github repo.
              </EvergreenLink>
            </Paragraph>
          </Pane>
        }
      >
        <Button marginLeft={10}>
          <HelpIcon size={15} />
        </Button>
      </Popover>
    );
  }

  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <FilePicker
        name="goodreads_library"
        capture
        accept="text/csv"
        width={250}
        margin={20}
        onChange={(file) => dispatch(actions.parseCSV(file))}
        placeholder="Select the file here!"
      />
      <Pane display="flex">
        <Link href="/charts">
          <Button onClick={() => dispatch(actions.setChartData(fullData))}>
            {props.buttonText}
          </Button>
        </Link>
        {info}
      </Pane>
    </Pane>
  );
};

export default FileSelect;
