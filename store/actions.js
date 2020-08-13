import * as actions from "./actionTypes";
import { csvToJson } from "../util/processFile";

export const parseCSV = (file) => {
  const reader = new FileReader();
  reader.readAsText(file[0]);

  return function (dispatch) {
    reader.onload = function () {
      dispatch(setFullData(csvToJson(reader.result)));
    };
    reader.onerror = () => {
      dispatch(parseError);
    };
  };
};

export const setChartData = (data) => {
  return {
    type: actions.SET_CHART_DATA,
    data: data,
  };
};

export const setFullData = (parsed) => {
  return {
    type: actions.SET_FULL_DATA,
    parsed: parsed,
  };
};
