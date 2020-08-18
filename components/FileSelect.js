import React from "react";
import Link from "next/link";
import { FilePicker, Pane, Button } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const csv = require("csvtojson");

const FileSelect = (props) => {
  const dispatch = useDispatch();
  const fullData = useSelector((state) => state.fullData);

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

      <Link href="/Charts">
        <Button onClick={() => dispatch(actions.setChartData(fullData))}>
          {props.buttonText}
        </Button>
      </Link>
    </Pane>
  );
};

export default FileSelect;
