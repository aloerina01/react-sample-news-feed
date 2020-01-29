import * as React from "react";
import { FeedItemMenuProps, FeedItemMenuState } from "../types/FeedItemMenu";

export const FeedItemMenu: React.FC<FeedItemMenuProps> = () => {
  const [{ isDisplay, feedItem }] = useFeedItemMenu();
  if (!isDisplay || !feedItem) {
    return null;
  }
  return <div>a</div>;
};

export function useFeedItemMenu() {
  const reducer = (
    state: FeedItemMenuState,
    action: any
  ): FeedItemMenuState => {
    return state;
  };
  const initialState = {
    isDisplay: false,
    feedItem: null
  };
  return React.useReducer(reducer, initialState);
}
