import { createStore } from "react-redux";

const initialState = {
  counter: 0,
};

const reducerFnc = (state = { initialState }, action) => {
  if (action.type === "add") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
};
export const store = createStore(reducerFnc);
export default Redux;
