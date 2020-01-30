import { useReducer } from "react";

// TODO: implements
export function useObservableStore() {
  const reducer = state => {
    return state;
  };
  const initialState = {};
  return useReducer(reducer, initialState);
}
