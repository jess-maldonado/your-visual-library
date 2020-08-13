import { FilePicker } from "evergreen-ui";
import { connect, useDispatch, useStore } from "react-redux";
import * as actions from "../store/actions";

const csv = require("csvtojson");

const FileSelect = (props) => {
  const dispatch = useDispatch();
  const store = useStore();
  console.log(store.getState());
  return (
    <FilePicker
      name="goodreads_library"
      capture
      accept="text/csv"
      width={250}
      margin={20}
      onChange={(file) => dispatch(actions.parseCSV(file))}
      placeholder="Select the file here!"
    />
  );
};

export default FileSelect;
