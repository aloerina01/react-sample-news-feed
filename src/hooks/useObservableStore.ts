import { useReducer } from "react";
import { ObservableStore } from "../StoreFactory";
import { State } from "../types/State";

// TODO: implements
export function useObservableStore(
  stores: Array<ObservableStore<State>>,
  calculateState: () => State
): State {
  const initialState = {};
  const [calculatedState, dispatch] = useReducer(calculateState, initialState);
  stores.forEach(store => store.addListener(() => dispatch(store.getState())));
  return calculatedState;
}
