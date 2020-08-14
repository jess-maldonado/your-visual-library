import * as actions from "./actionTypes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let chartData = new Map();
chartData.set("authors", [{ author: "", books: 0 }]);
chartData.set("totalBooks", 0);
chartData.set("totalAuthors", 0);

const initialState = {
  fullData: {},
  chartData: chartData,
};

const setFullData = (state, action) => {
  return {
    ...state,
    fullData: action.parsed,
  };
};

const setChartData = (state, action) => {
  return {
    ...state,
    chartData: action.data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CHART_DATA:
      return setChartData(state, action);
    case actions.SET_FULL_DATA:
      return setFullData(state, action);
    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));
