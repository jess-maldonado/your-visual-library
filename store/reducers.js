import * as actions from "./actionTypes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  fullData: {},
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
    chartData: action.chartData,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CHART_DATA:
      return state;
    case actions.SET_FULL_DATA:
      return setFullData(state, action);
    default:
      console.log(state);
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));
