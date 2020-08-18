import React from "react";
import Link from "next/link";
import { FilePicker, Pane, Button, HelpIcon, Popover } from "evergreen-ui";
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
      <Popover content={<Pane>12345</Pane>}>
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
