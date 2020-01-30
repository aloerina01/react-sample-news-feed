import * as React from "react";
import { FeedItemMenuState } from "../types/FeedItemMenu";

export const FeedItemMenu: React.FC = () => {
  const [{ isDisplay, target }] = useFeedItemMenu();
  if (!isDisplay || !target) {
    return null;
  }
  return <div>a</div>;
};
