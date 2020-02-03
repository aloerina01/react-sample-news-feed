import * as React from "react";
import { FeedItemMenuProps } from "../types/FeedItemMenu";

export const FeedItemMenu: React.FC<FeedItemMenuProps> = ({
  isDisplay,
  data
}) => {
  if (!isDisplay || !data) {
    return null;
  }
  return <div>a</div>;
};
