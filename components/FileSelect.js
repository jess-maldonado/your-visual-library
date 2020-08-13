import { FilePicker, Pane, Button } from "evergreen-ui";
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import * as actions from "../store/actions";

const csv = require("csvtojson");

const FileSelect = (props) => {
  const dispatch = useDispatch();
  const fullData = useSelector((state) => state.fullData);

  return (
    <Pane>
      <FilePicker
        name="goodreads_library"
        capture
        accept="text/csv"
        width={250}
        margin={20}
        onChange={(file) => dispatch(actions.parseCSV(file))}
        placeholder="Select the file here!"
      />
      <Button onClick={() => dispatch(actions.setChartData(fullData))}>
        Click
      </Button>
    </Pane>
  );
};

export default FileSelect;
