import { useReducer, useEffect } from "react";
import { ObservableStore } from "../StoreFactory";

export function useObservableStore<S>(store: ObservableStore<S>) {
  const reducer = (state: S): S => state;
  const [initialState, dispatch] = useReducer(reducer, store.getState());
  useEffect(() => {
    store.addListener(() => dispatch(store.getState()));
    return store.removeAllListeners();
  });
  return initialState;
}
