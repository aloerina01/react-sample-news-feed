import { useState, useEffect } from "react";
import { ObservableStore } from "../StoreFactory";

export function useObservableStore<S>(store: ObservableStore<S>) {
  const [storeState, observe] = useState(store.getState());
  useEffect(() => {
    store.addListener(() => {
      observe(store.getState());
    });
    return () => store.removeAllListeners();
  });
  return storeState;
}
